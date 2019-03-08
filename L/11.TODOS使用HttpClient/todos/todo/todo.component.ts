import { Component, OnInit } from '@angular/core';

// 导入服务
import { TodosService } from '../todos.service';

// 接口
import { Todo } from "../todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  // 告诉组件： 组件中需要使用这个服务
  constructor(private TodosService: TodosService) { }
  todos

  addTodo(todoName: string) {
    this.TodosService
        .addTodo(todoName)
        .subscribe((todo: Todo)=> {
          console.log('Todos组件中获取到的数据-->',todo)
          this.todos.push(todo)
        }) 
  }

  delTodo(id: number) {
    this.TodosService
        .delTodo(id)
        .subscribe(() => {
          console.log('success',)
          this.todos = this.todos.filter(todo => todo.id !== id)
        })
  }

  changeTodo(id: number) {
    const curTodo: Todo = this.todos.find(todo => todo.id === id)
    this.TodosService
        .changeTodo(id,!curTodo.done)
        .subscribe((todo: Todo) => {
          console.log('Todos组件中切换-->',todo)
          curTodo.done = todo.done
        })
  }
  
  ngOnInit() {
    this.TodosService
        .getTodos()
        .subscribe((todos: Todo[]) => {
          this.todos = [...todos]
          console.log("Todos组件中获取到的数据-->",todos)
        })
  }
}
