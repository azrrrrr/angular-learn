import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 插值表达式 -数据
  title = 'Test';
  data = '2018-12-29';
  // 插值表达式 绑定-JS表达式
  a = 1;
  b = 2;
  // 插值表达式 -方法
  fn() {
    return 'This is fn'
  };
  // 插值表达式 - 属性绑定
  url = 'https://www.baidu.com/';
  // 事件绑定
  handleClick() {
    console.log('click')
  };
  hamdleMouseenter() {
    console.log('Mouseenter')
  }
  // 事件对象
  handleClick2(e) {
    // 阻止浏览器的默认行为
    e.preventDefault()
    console.log('事件触发了', e)
  }
  // 双向数据绑定
  msg = "Test"
}
