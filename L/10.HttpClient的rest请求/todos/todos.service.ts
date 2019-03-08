import { Injectable } from '@angular/core';
// 接口
import { Todo }  from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }
  todos: Todo[]

  // 提供数据
  getTodos() {
    const todos: Todo[] = [
      {id: 1, name: '1', done: true},
      {id: 2, name: '2', done: false}
    ]
    // 添加一个初终数据
    this.todos = todos
    return todos
  }
  // 添加任务
  addTodo(todoName: string) {
    let id: number
    if (this.todos.length === 0) {
      return 1
    } else {
      id = this.todos[this.todos.length - 1 ].id - 1
    }

    this.todos.push({
      id,
      name: todoName,
      done: false,
    })
 }
 // 切换任务
 changeTodo(id: number) {
  const curTodo = this.todos.find(todo => todo.id === id)
  curTodo.done = !curTodo.done
 }
 // 删除任务
 delTodo(id: number) {
  // this.todos = this.todos.filter(todo => todo.id !== id)
  const curIndex = this.todos.findIndex(todo => todo.id === id)
  this.todos.splice(curIndex,1)
 }
}
