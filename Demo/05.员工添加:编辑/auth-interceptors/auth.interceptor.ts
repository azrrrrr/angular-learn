import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { Router } from '@angular/router'


@Injectable() 

export class AuthInterceptors implements HttpInterceptor{

  constructor(private router: Router) { }

  // 拦截使用 HttpClient 方法的请求
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // 如果是登录，不需要添加 Authorization
    if(req.headers.get('No-Auth')==='TRUE') { return next.handle(req)}
    // 非登录请求，都要添加 Authorization
    const token = localStorage.getItem('login-token')
    // 统一添加请求头
    const anthReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    })
    // console.log('http  拦截器')
    return next.handle(anthReq).pipe(
      tap(
        // 成功的回调
        ok => {},
        // 失败的回调
        error => {
          console.log('捕捉到错误', error)
          // 遇到401报错，移出token，并且跳转到登陆页面
          if (error.status === 401) {
            localStorage.removeItem('login-token')
            this.router.navigate(['/login'])
          }
        }
      )
    )
  }
}
