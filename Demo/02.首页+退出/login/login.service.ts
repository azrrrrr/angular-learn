import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginForm } from './login.type';

import { URL } from '../config.js'

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  login(loginForm: LoginForm) {
    // return this.http.post(`${URL}/tokens`, loginForm)
    return this.http.post(`http://localhost:2080/tokens`, loginForm)
  }
}
