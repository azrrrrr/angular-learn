import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Validators.required ==> 必填项
  username = new FormControl('', [ Validators.required ] )
  ngOnInit() {
    console.log(this.username)
    // 如果有required错误，就返回true
    // 如果没有required错误，就返回false
    console.log(this.username.hasError('required'))
  }
}

