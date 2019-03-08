import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TodoComponent
  ],
  declarations: [TodoComponent, TodoListComponent, TodoHeaderComponent]
})
export class TodosModule { }
