import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-site-login-form',
  templateUrl: './site-login-form.component.html',
  styleUrls: ['./site-login-form.component.css']
})
export class SiteLoginFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService
    ) {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      userid: new FormControl(),
      password: new FormControl()
    });
  }

  submit() {
    this.api.login(this.form.value);
  }

  ngOnInit() {
  }

}
