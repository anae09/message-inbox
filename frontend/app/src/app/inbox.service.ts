import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Thread } from './models/thread';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class InboxService {

  constructor(private http: HttpClient) { }
  uri = "http://localhost:4000";

  /*----------USERS--------------- */

  login(data) {
    return this.http.post<{message: string, user: User}>(`${this.uri}/users/login`, data);
  }

  getAllUsers() {
    return this.http.get(`${this.uri}/users/allUsers`);
  }

  /*----------THREADS--------------- */

  createThread(data) {
    return this.http.post<{message: string, thread: Thread}>(`${this.uri}/threads/createThread`, data);
  }

  userThreads(username: string) {
    return this.http.get(`${this.uri}/threads/userThreads/` + username);
  }

  deleteThread(threadId: string) {
    return this.http.delete(`${this.uri}/threads/deleteThread/` + threadId);
  }

  /*----------MESSAGES--------------- */

  sendMessage(data) {
    return this.http.post(`${this.uri}/messages/sendMessage`, data);
  }

  getMessages(threadId: string) {
    return this.http.get(`${this.uri}/messages/getMessages/` + threadId);
  }


}
