import { Component, OnInit } from '@angular/core';
import { InboxService } from '../inbox.service';
import { Message } from '../models/message';
import { Thread } from '../models/thread';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor(private inboxService: InboxService, private router: Router) { }

  loginUser: User = null;
  panelOpenState = false;

  userThreads: Thread[] = [];
  messages: Message[] = [];
  users: User[] = [];

  ngOnInit(): void {
    this.loginUser = JSON.parse(localStorage.getItem("user"));
    if (!this.loginUser) {
      this.router.navigateByUrl("");
    }
    this.inboxService.userThreads(this.loginUser.username).subscribe((threads: Thread[]) => {
      console.log("threads", threads);
      this.userThreads = threads;
      this.inboxService.getAllUsers().subscribe((users: User[])=> {
        console.log("all users", users);
        this.users = users.filter(user => user.username !== this.loginUser.username);
      })
    });
  }

  openPanel(threadId: string) {
    this.panelOpenState = true;
    this.inboxService.getMessages(threadId).subscribe((messages: Message[]) => {
      this.messages = messages;
      this.messages.sort(this.compare);
    });
  }

  compare(a: Message, b: Message) {
    let d1 = new Date(a.timestamp).getMilliseconds();
    let d2 = new Date(b.timestamp).getMilliseconds();
    if (d1 < d2) return 1;
    if (d1 > d2) return -1;
    return 0;
  }

  sendMessage(form: NgForm, thread: Thread) {
    if (form.invalid) {
      return;
    }
    const data:Message = {
      threadId: thread._id,
      sender: this.loginUser.username,
      receiver: (thread.participants[0] === this.loginUser.username) ? thread.participants[1] : thread.participants[0],
      timestamp: new Date(),
      body: form.value.body
    }
    console.log(data);
    this.inboxService.sendMessage(data).subscribe(res => {
      console.log(res);
      this.messages.push(data);
      form.resetForm();
    });
  };

  logout() {
    localStorage.clear();
    this.router.navigateByUrl("");
  }

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
      console.log(res.message);
      form.resetForm();
      this.userThreads.push(res.thread);
    });
  }

}
