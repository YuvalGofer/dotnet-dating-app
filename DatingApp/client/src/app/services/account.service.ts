import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/models/user';
import { environment } from 'environments/environment';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = environment.apiurl;
  private currentUserSource$ = new ReplaySubject<User>(1);
  public currentUser$ = this.currentUserSource$.asObservable();
  constructor(private http: HttpClient) { }

  login(model: any): Observable<any> {

    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user))
          this.currentUserSource$.next(user);
        }
      })
    );
  }
  setCurrentUser(user: User) {
    this.currentUserSource$.next(user);
  }
  logout() {
    localStorage.removeItem('user');
    this.currentUserSource$.next();
  }
  register(model:any):Observable<any>{
    return this.http.post<User>(this.baseUrl + 'account/register', model).pipe(
      map((user: User) =>{
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource$.next(user);
        }
        return user;
      })
    )
  }
}
