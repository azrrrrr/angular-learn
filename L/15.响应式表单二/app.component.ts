import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = new FormControl('用户名test')
  password = new FormControl('')

  // 获取用户名
  getUsername() {
    console.log(this.username.value)
  }


  // 更新用户名
  setUserName() {
    this.username.setValue('用户名变了')
  }
}

