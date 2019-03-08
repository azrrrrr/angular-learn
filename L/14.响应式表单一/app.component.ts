import { Component } from '@angular/core';

// 3. 导入表单控件
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 4. 实例化FormControl，传递一个初始化值作为第一个参数。
  username = new FormControl('用户名test')
  password = new FormControl('')
}
