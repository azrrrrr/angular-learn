import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

interface Todo {
  name: string,
  desc: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private http: HttpClient) {}

  name: string
  // 只有一个参数
  // getData() {
  //   this.http.get('../assets/todos.json').subscribe((res: any) => {
  //     console.log(res)
  //     this.name = res.name
  //   })
  // }


  // 添加类型检查  添加泛型
  // getData() {
  //   // 添加泛型
  //   this.http.get<Todo>('../assets/todos.json').subscribe((res) => {
  //     console.log(res)
  //     this.name = res.name
  //   })
  // }

  // 添加类型检查  添加约束
  // getData() {
  //   this.http.get('../assets/todos.json').subscribe((res: Todo) => {
  //     console.log(res)
  //     this.name = res.name
  //   })
  // }

  // 添加类型检查  泛型+约束
  // getData() {
  //   // 添加泛型
  //   this.http.get<Todo>('../assets/todos.json').subscribe((res: Todo) => {
  //     console.log(res)
  //     this.name = res.name
  //   })
  // }


  // ==================================================================================


  // 两个参数 完整的响应
  // getData() {
  //   this.http
  //     .get('../assets/todos.json',{ observe: 'response' })
  //     .subscribe((res)=> {
  //      console.log(res.headers.get('content-type'), res.body)
  //     })
  // }


  // 完整的响应 - 添加类型检查 -- 添加泛型
  // getData() {
  //   this.http
  //     // 添加泛型
  //     .get<Todo>('../assets/todos.json', { observe: 'response' })
  //     .subscribe(res => {
  //       console.log(res.headers.get('content-type'), res.body)
  //     })
  // }

  // 完整的响应 - 添加类型检查 -- 给res添加HttpResponse
  // getData() {
  //   this.http
  //     // 引入HttpResponse 添加泛型
  //     .get('../assets/todos.json', { observe: 'response' })
  //     .subscribe((res: HttpResponse<Todo>) => {
  //       console.log(res.headers.get('content-type'), res.body)
  //     })
  // }

  // 完整的响应 - 添加类型检查 -- 泛型+HttpResponse
  getData(){
    this.http
    .get<Todo>('../assets/todos.json', { observe: 'response' })
    .subscribe(
      (res: HttpResponse<Todo>) => {
        console.log(res.headers.get('content-type'), res.body)
        this.name = res.body.name
      }),
      err => { 
        console.log(err)
      }
  }
}
