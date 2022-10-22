import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from 'app/models/member';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
  })
export class MembersService {
  baseurl = environment.apiurl;

  constructor(private http: HttpClient) { }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.baseurl}users`);
  }
  getMember(username: string): Observable<Member> {
    return this.http.get<Member>(`${this.baseurl}users/${username}`);
  }
}
