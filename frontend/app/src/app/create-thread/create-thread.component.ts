import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { InboxService } from '../inbox.service';
import { User } from '../models/user';
@Component({
  selector: 'app-create-thread',
  templateUrl: './create-thread.component.html',
  styleUrls: ['./create-thread.component.css']
})
export class CreateThreadComponent implements OnInit {

  constructor(private inboxService: InboxService, private router: Router) { }

  ngOnInit(): void {
    this.loginUser = JSON.parse(localStorage.getItem("user"));
    if (!this.loginUser) {
      this.router.navigateByUrl("");
    }

    this.inboxService.getAllUsers().subscribe((users: User[])=> {
      console.log(users);
      this.users = users.filter(user => user.username !== this.loginUser.username);

    })
  }

  users: User[] = [];
  loginUser: User = null;

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const data = {
      title: form.value.title,
      participants: [
        this.loginUser.username,
        form.value.user
      ]
    }
    this.inboxService.createThread(data).subscribe(res => {
      console.log(res);
      form.resetForm();
    });
  }

}
