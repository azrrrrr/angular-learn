import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //  多个CSS类
  classList = {
    redColor : true,
    fz: true
  }
  //  单个CSS类
  isTest = false
  //  多个style
  styleList = {
    color: 'green',
    fontSize: '50px'
  }
  // 单个style
  col = 'yellow'
  // *ngIf  展示隐藏
  isShow = false
  // css 展示隐藏
  isHidden = true


  // ngFor
  nums = [898989,89898,8888,2323,4445455,56666,3333]

  // trackBy
  colors = [
    {id: 1,name: 'red'},
    {id: 2,name: 'blue'},
    {id: 3,name: 'green'}
  ]
  fetchColor(){
    setTimeout(()=>{
      this.colors = [
        {id: 4,name: 'red'},
        {id: 5,name: 'blue'},
        {id: 7,name: 'green'}   
      ]
    },500)
  }
}
