import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'

import { TodosModule } from './todos/todos.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
