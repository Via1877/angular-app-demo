import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostModule } from './modules/post/post.module';

@NgModule({
    declarations: [
        AppComponent, // 组件
    ],
    imports: [BrowserModule, AppRoutingModule, PostModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
