import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-site-board-write',
  templateUrl: './site-board-write.component.html',
  styleUrls: ['./site-board-write.component.css']
})
export class SiteBoardWriteComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService
    ) {
    this.buildForm();
   }

   buildForm(): void {
    this.form = this.formBuilder.group({
      title: new FormControl(),
      content: new FormControl(),
    });
  }

  submit() {
    this.api.write(this.form.value);
  }

  ngOnInit() {
  }

}
