import { Injectable } from '@angular/core';
// 接口
import { Todo }  from './todo';

// 导入HttpClient
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  // 在组件中使用HttpClient
  constructor(private http: HttpClient) {}

  todos: Todo[]

  // 添加Todos的接口地址
  todosUrl = 'http://localhost:3000/todos'


  // 提供数据
  getTodos() {
    return this.http.get<Todo[]>(this.todosUrl)
  }

  // 添加任务
  addTodo(todoName: string) {
    return this.http.post<Todo>(this.todosUrl, {
      "name": todoName,
      "done": false
    })
  }

  // 切换任务
  changeTodo(id: number,done: boolean) {
    return this.http.patch<Todo>(`${this.todosUrl}/${id}`,{ done })
  }

  // 删除任务
  delTodo(id: number) {
    return this.http.delete<Object>(`${this.todosUrl}/${id}`)
  }
}
