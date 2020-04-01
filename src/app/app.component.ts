//组件

import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // 选择器，组件会放在app-root 元素中
  templateUrl: './app.component.html', // 组件模板位置
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'welcom my space';
}
