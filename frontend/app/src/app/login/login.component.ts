import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InboxService } from '../inbox.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private inboxService: InboxService, private router: Router) { }

  ngOnInit(): void {
  }

  username: string = "";
  password: string = "";
  message: string = "";

  login() {
    this.message = "";
    if (this.username === "" || this.password === "") {
      this.message = "All fields required";
      return;
    }
    const data = {
      username: this.username,
      password: this.password
    }
    this.inboxService.login(data).subscribe(res=> {
      if (!res.user) {
        this.message = res.message;
        return;
      } else {
        localStorage.setItem("user", JSON.stringify(res.user));
        this.router.navigateByUrl('inbox');
      }
    });
  }

}
