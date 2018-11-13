import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-site-board-list',
  templateUrl: './site-board-list.component.html',
  styleUrls: ['./site-board-list.component.css']
})
export class SiteBoardListComponent implements OnInit {

  list: any[] = [];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this.api.getBoardList().subscribe((data: any) => {
      this.list = data.data;
    });
  }

  delete(idx: string): void {
    this.api.deleteBoard(idx).subscribe((data: any) => {
      if (data.success) {
        this.getList();
      }
    });
  }

}
