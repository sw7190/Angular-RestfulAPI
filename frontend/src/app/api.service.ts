import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiResponse } from './api-response';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl: String = `${environment.apiUrl}`;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  // 유저 목록 불러오기
  getUserList(): any {
    return new Promise((res, rej) => {
      this.http.get<ApiResponse>(`${this.apiUrl}/user`)
      .subscribe((data: any) => {
        const userList = data.data.map(v => v);
        res(userList);
      });
    });
  }

  // 글 목록 불러오기
  getBoardList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/board`)
    .pipe( map((res: Response) => res));
  }

  // 글 불러오기
  getBoard(idx: String): Observable<any> {
    return this.http.get(`${this.apiUrl}/board/${idx}`)
    .pipe(map((res: Response) => res));
  }

  // 글 삭제
  deleteBoard(idx: string): any {
    return this.http.delete<ApiResponse>(`${this.apiUrl}/board/${idx}`);
  }

  // 글쓰기
  write(values: any): void {
    this.http.post<ApiResponse>(`${this.apiUrl}/board`, values)
    .subscribe((data: any) => {
      console.log(data);
      alert(data.msg);
      if (data.success) {
        this.router.navigate(['/boardList']);
      }
    });
  }

  // 로그인
  login(values: any): void {
    this.http.post<ApiResponse>(`${this.apiUrl}/user/login`, values)
    .subscribe((data: any) => {
      alert(data.msg);
     if (data.success) {
        localStorage.setItem('token', data.data);
        this.router.navigate(['/']);
     }
    });
  }

  // 회원가입
  join(values: any): boolean {
    this.http.post<ApiResponse>(`${this.apiUrl}/user`, values)
    .subscribe((data: any) => {
      alert(data.msg);
      if (data.success) { this.router.navigate(['/login']); return true; }
    });
    return false;
  }

  // token값 읽어와서 저장
  me(): void {
    this.http.get<ApiResponse>(`${this.apiUrl}/user/me`)
    .subscribe((data: any) => {
      if (data.success) {
        localStorage.setItem('user', JSON.stringify(data.data));
      }
    });
  }

  // token 새롭게 발행
  refresh(): void {
    this.http.get<ApiResponse>(`${this.apiUrl}/user/refresh`)
    .subscribe((data: any) => {
      if (data.success) {
        localStorage.setItem('token', data.data);
        this.me();
      }
    });
  }

  // 로그인 상태인지 확인
  isLogin(): boolean {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }

  // 로그아웃
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

}
