import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-site-board-view',
  templateUrl: './site-board-view.component.html',
  styleUrls: ['./site-board-view.component.css']
})
export class SiteBoardViewComponent implements OnInit {

  idx: String;

  item: {
    title: String,
    content: String
  } = {
    title: '',
    content: ''
  };

  constructor(
    private router: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.idx = this.router.snapshot.paramMap.get('idx');
    this.getBoard();
  }

  getBoard(): void {
    this.api.getBoard(this.idx).subscribe((data: any) => {
      if (data.success) { this.item = data.data; }
    });
  }

}
