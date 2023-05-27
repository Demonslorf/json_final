import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Models/Usuario.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class LogService {

  url = 'http://localhost:9100/';

  constructor(private http: HttpClient, private router: Router) { }

  logIn(usu: Usuario): Observable<any>{
    return this.http.post(this.url+"logIn", usu);
  } 

  loggedIn(): Boolean{
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/Login']);
  }
}
