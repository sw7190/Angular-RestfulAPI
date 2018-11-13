import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';

import { SiteInfoComponent } from './site-info/site-info.component';
import { SiteLoginFormComponent } from './site-login-form/site-login-form.component';
import { SiteJoinFormComponent } from './site-join-form/site-join-form.component';
import { SiteUserListComponent } from './site-user-list/site-user-list.component';
import { SiteBoardListComponent } from './site-board-list/site-board-list.component';
import { SiteBoardViewComponent } from './site-board-view/site-board-view.component';
import { SiteBoardWriteComponent } from './site-board-write/site-board-write.component';

const routes: Routes = [
  { path: '', component: SiteInfoComponent },
  { path: 'login', component: SiteLoginFormComponent,  },
  { path: 'join', component: SiteJoinFormComponent },
  { path: 'userList', component: SiteUserListComponent },
  { path: 'boardList', component: SiteBoardListComponent },
  { path: 'view/:idx', component: SiteBoardViewComponent, canActivate: [AuthGuard] },
  { path: 'write', component: SiteBoardWriteComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
