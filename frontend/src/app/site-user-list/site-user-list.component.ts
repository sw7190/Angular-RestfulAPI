import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../user';

@Component({
  selector: 'app-site-user-list',
  templateUrl: './site-user-list.component.html',
  styleUrls: ['./site-user-list.component.css']
})
export class SiteUserListComponent implements OnInit {

  userList: User[];

  constructor(
    private api: ApiService
  ) { }

  async ngOnInit() {
    this.userList = await this.api.getUserList();
  }

}
