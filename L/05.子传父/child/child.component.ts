// 导入装饰器@Output和EventEmitter
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
// 使用装饰器@Output修饰了getMoney属性，并为其赋了初值为EventEmitter的实例
  @Output()
  getMoney = new EventEmitter()

  handleClick() {
    // 触发事件
    this.getMoney.emit('给我1000')
  }
}
