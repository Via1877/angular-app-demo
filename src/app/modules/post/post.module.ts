import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
    //装饰器的累 来自angular/core 这个包
    declarations: [PostComponent], // 包含的模块的组件指令等
    imports: [
        // 引用其他模块的东西，引用其中导出的功能
        CommonModule,
        AppRoutingModule,
    ],
    exports: [PostComponent], // 导出，别的模块要用
})
export class PostModule {}
