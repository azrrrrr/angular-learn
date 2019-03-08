import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { URL } from '../config'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


  logout() {
    // http://localhost:2080/tokens

    // const token = localStorage.getItem('login-token')
    return this.http.delete(`${URL}/tokens`, {
      // headers: {
      //   Authorization: `Bearer ${token}`
      // }
    })
  }
}
