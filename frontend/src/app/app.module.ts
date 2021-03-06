import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteNavigationComponent } from './site-navigation/site-navigation.component';
import { SiteInfoComponent } from './site-info/site-info.component';
import { SiteJoinFormComponent } from './site-join-form/site-join-form.component';
import { SiteLoginFormComponent } from './site-login-form/site-login-form.component';
import { SiteUserListComponent } from './site-user-list/site-user-list.component';
import { ApiService } from './api.service';
import { SiteBoardListComponent } from './site-board-list/site-board-list.component';
import { SiteBoardWriteComponent } from './site-board-write/site-board-write.component';
import { SiteBoardViewComponent } from './site-board-view/site-board-view.component';
import { AuthGuard } from './auth.guard';
import { RequestInterceptorService } from './request-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    SiteNavigationComponent,
    SiteInfoComponent,
    SiteJoinFormComponent,
    SiteLoginFormComponent,
    SiteUserListComponent,
    SiteBoardListComponent,
    SiteBoardWriteComponent,
    SiteBoardViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true
    },
    AuthGuard,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
