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
    this.TodosService.addTodo(todoName)
  }

  delTodo(id: number) {
    this.TodosService.delTodo(id)
  }

  changeTodo(id: number) {
    this.TodosService.changeTodo(id)
  }
  
  ngOnInit() {
    this.todos = this.TodosService.getTodos()
  }
}
