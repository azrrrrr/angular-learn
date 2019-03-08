import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { URL } from '../config.js'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


  logout() {
    // return this.http.delete(`${URL}/tokens`)

    const token = localStorage.getItem('login-token')
    return this.http.delete(`http://localhost:2080/tokens`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
}
