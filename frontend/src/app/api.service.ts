import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl: String = `${environment.apiUrl}`;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getUserList(): any {
    return new Promise((res, rej) => {
      this.http.get(`${this.apiUrl}/user`)
      .subscribe((data: any) => {
        const userList = data.data.map(v => v);
        res(userList);
      });
    });
  }

  login(values: any): void {
    this.http.post(`${this.apiUrl}/user/login`, values)
    .subscribe((data: any) => {
      alert(data.msg);
     if (data.success) {
        localStorage.setItem('token', data.data);
        this.router.navigate(['/']);
     }
    });
  }

  join(values: any): boolean {
    this.http.post(`${this.apiUrl}/user`, values)
    .subscribe((data: any) => {
      alert(data.msg);
      if (data.success) { this.router.navigate(['/login']); }
    });
    return false;
  }

  isLogin(): boolean {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
