import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 1. 导入相应式表单的Module
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  // 2. 配置为当前模块的依赖项
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
