import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-site-join-form',
  templateUrl: './site-join-form.component.html',
  styleUrls: ['./site-join-form.component.css']
})
export class SiteJoinFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService
    ) {
    this.buildForm();
   }

  ngOnInit() {
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      name: new FormControl(),
      userid: new FormControl(),
      password: new FormControl(),
      phone: new FormControl(),
    });
  }

  submit() {
    this.api.join(this.form.value);
  }

}
