import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "inbox",
    component: InboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
