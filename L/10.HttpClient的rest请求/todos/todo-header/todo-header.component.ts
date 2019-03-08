import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {

  constructor() { }


  // 任务名称
  todoName = ''
  // 类型注解
  // todoName: string

  @Output()
  add = new EventEmitter<String>()

    
  addTodo() {
    
    if (this.todoName.trim() === '') {
        return
      }

    this.add.emit(this.todoName)

    this.todoName = ''
  }

  ngOnInit() {
  }
 
}
