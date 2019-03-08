import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// 1. 导入路由模块
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NewComponent } from './new/new.component';



// 2. 配置路由规则
const appRoutes: Routes = [
  // 默认路由  -- 一般放在最前面
  { path:'', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  // 配置new路由
  // :id 表示路由参数
  // 能匹配： /new/1 或 /new/2 或 /new/3 ...
  // 不能匹配： /new 或 /new/2/info
  { path: 'new/:id', component: NewComponent },
  // 通配符路由  -- 一般放在最后面
  { path: '**', component: NotfoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotfoundComponent,
    NewComponent
  ],

  imports: [
    BrowserModule,
    // 3. 配置路由模块，做为跟模块的依赖项
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
