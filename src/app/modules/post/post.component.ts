import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
    title = 'Posts';
    list = [
        {
            name: 'bones',
            des: 'this is a woman who i love',
        },
        {
            name: 'bones',
        },
        {
            name: 'bones',
            des: 'this is a woman who i love',
        },
    ];
    constructor() {}

    ngOnInit(): void {}

    removeItem(i: number) {
        // 事件处理方法

        console.log('remove');
        this.list = this.list.filter((item, index) => {
            return index != i;
        });
    }
}
