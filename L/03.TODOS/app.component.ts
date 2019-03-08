import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos = [
    {id: 1, name: '吃饭', done: true},
    {id: 2, name: '睡觉', done: false},
    {id: 4, name: '1吃饭', done: true},
    {id: 5, name: '2睡觉', done: false},
    {id: 6, name: '3吃饭', done: true},
    {id: 7, name: '4睡觉', done: false}
  ]
  private todo: any

  // trackBy方法
  trackByTodo(index, todo) {
    return todo.id
  }

  // 任务名称
  todoName = ''
  addTodo() {
    // 非空操作
    if (this.todoName.trim() === '') {
      return
    }

    // id
    let id
    if (this.todos.length === 0) {
      return 1
    } else {
      id = this.todos[this.todos.length - 1 ].id - 1
    }

    // 放入todos数组
    this.todos.push({
      id,
      name: this.todoName,
      done: false,
    })
    this.todoName = ''
  }

  // 删除
  delTodo(e,id) {
    e.preventDefault()
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  // 任务完成状态切换
  changeTodo(id) {
    const curTodo = this.todos.find(todo => todo.id === id)
    curTodo.done = !curTodo.done
  }
}
