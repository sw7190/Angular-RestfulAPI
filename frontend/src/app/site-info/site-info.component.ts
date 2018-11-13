import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-site-info',
  templateUrl: './site-info.component.html',
  styleUrls: ['./site-info.component.css']
})
export class SiteInfoComponent implements OnInit {

  name: string;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.name = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).name : '';
  }

}
