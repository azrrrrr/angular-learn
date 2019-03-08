import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service';

import { LoginForm } from './login.type';

import { Router } from '@angular/router';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

// token 类型检查
interface Token {
  token: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, 
              private LoginService: LoginService,
              private router: Router
              ) { }

  loginForm: FormGroup;

  submitForm(): void {
    const loginForm = this.loginForm
    const { controls } = loginForm

    for (const i in controls) {
      controls[ i ].markAsDirty();
      controls[ i ].updateValueAndValidity();
    }

    if(!loginForm.valid) {
      console.log('验证失败')
      return 
    }
    // console.log('验证成功', loginForm.value)

    const { userName, password } = loginForm.value
    const loginParams: LoginForm = {
      username: userName,
      password
    }
    this.LoginService.login(loginParams)
        .subscribe((res: Token)=> {
          // console.log(res)
          // 存储token
          localStorage.setItem('login-token', res.token)
          this.router.navigate(['/home'])
        })
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [ null, [ Validators.required, Validators.minLength(3), Validators.maxLength(6) ] ],
      password: [ null, [ Validators.required, Validators.pattern(/^[a-zA-Z0-9]{6,8}$/) ] ]
    });
  }
}
