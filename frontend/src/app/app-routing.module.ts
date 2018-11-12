import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteInfoComponent } from './site-info/site-info.component';
import { SiteLoginFormComponent } from './site-login-form/site-login-form.component';
import { SiteJoinFormComponent } from './site-join-form/site-join-form.component';
import { SiteUserListComponent } from './site-user-list/site-user-list.component';

const routes: Routes = [
  { path: '', component: SiteInfoComponent },
  { path: 'login', component: SiteLoginFormComponent },
  { path: 'join', component: SiteJoinFormComponent },
  { path: 'userList', component: SiteUserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
