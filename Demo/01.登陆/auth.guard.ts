import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    console.log('路由守卫')
    // 获取token
    const token = localStorage.getItem('login-token')
    if (!!token) {
      return true
    }

    // 跳转到登录页 login页面
    this.router.navigate(['/login'])
    return false
  }
}
