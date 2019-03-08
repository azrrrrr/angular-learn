import { Component, OnInit } from '@angular/core'

// 3 导入表单控件
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  // 验证规则: 要求最少长度为3
  // username = new FormControl('', [Validators.minLength(3)])

  // 验证规则: 要求最大长度为6
  username = new FormControl('', [Validators.maxLength(6)])

  ngOnInit() {

  }
}
