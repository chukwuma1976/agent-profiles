import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  usersUrl: string = 'https://dummyjson.com/users/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl+'?limit=0');
  }

  getUserById(id: string): Observable<User>{
    return this.http.get<User>(this.usersUrl + id);
  }

}
