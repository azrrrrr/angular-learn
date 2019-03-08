import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg = ''
  giveMoney(data) {
    console.log('父组件中的方法', data)
    this.msg = data
  }
}
