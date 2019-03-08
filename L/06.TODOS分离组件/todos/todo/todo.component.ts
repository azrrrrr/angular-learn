import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  todos = [
    {id: 1, name: '吃饭', done: true},
    {id: 2, name: '睡觉', done: false},
    {id: 4, name: '1吃饭', done: true},
    {id: 5, name: '2睡觉', done: false},
    {id: 6, name: '3吃饭', done: true},
    {id: 7, name: '4睡觉', done: false}
  ]
  // private todo: any


 addTodo(todoName) {
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
     name: todoName,
     done: false,
   })

 }

  delTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  changeTodo(id) {
    const curTodo = this.todos.find(todo => todo.id === id)
    curTodo.done = !curTodo.done
  }
  ngOnInit() {
  }
}
