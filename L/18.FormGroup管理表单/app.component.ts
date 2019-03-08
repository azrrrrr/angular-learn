import { Component } from '@angular/core'

// 1. 导入FormGroup
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // 2 .创建一个FormGroup的模型loginForm
  //     包含FormControl
  loginForm = new FormGroup({
    username: new FormControl('123456'),
    password: new FormControl('', [Validators.required])
  })

  handleSubmit() {
    console.log('submit',  this.loginForm.value)
    console.log('验证',  this.loginForm.valid)
    if (this.loginForm.valid) {
      console.log('表单验证成功, 发送请求提交表单')
    } else {
      console.log('表单验证失败, 提示用户表单验证失败')
    }
  }

  


}
