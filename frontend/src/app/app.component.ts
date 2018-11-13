import { Component } from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private router: Router,
    public api: ApiService
  ) {
    router.events.subscribe((event: RouterEvent) => {
      this.refeshToken(event);
    });
  }

  private refeshToken(event: RouterEvent): void {
    if (event instanceof NavigationStart && this.api.isLogin()) {
      try {
        this.api.refresh();
      } catch ( res ) {
        console.log(res);
      }
    }
  }

}
