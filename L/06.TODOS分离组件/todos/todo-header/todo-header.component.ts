import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {

  constructor() { }

  // 任务名称
  todoName = ''

  @Output()
  add = new EventEmitter()

  addTodo() {
    // 非空操作
    if (this.todoName.trim() === '') {
      return
    }

    this.add.emit(this.todoName)

    this.todoName = ''

  }

  ngOnInit() {
  }

}
