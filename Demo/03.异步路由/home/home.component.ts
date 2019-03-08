import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';

import { Router } from '@angular/router'

import { NzMessageService } from 'ng-zorro-antd'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private nzMessageService: NzMessageService,
    private homeService: HomeService,
    private router: Router ) {}

    
  isCollapsed = false;

  logout(e) {
    // e.preventDefault()
    
    this.homeService.logout().subscribe(
      res => {
        console.log('退出成功了', res)
        // 先清除本地的token
        localStorage.removeItem('itcast-token')
        // 再跳转到登录页
        this.router.navigate(['/login'])
      },
      err => {
        console.log('退出失败，出错了：', err)
        this.nzMessageService.create('warning',`稍后再试`)
      }
    )
  }

  cancel(): void {
    this.nzMessageService.info('已取消');
  }

  ngOnInit() {
  }

}
