import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    template: '<a routerLink="/home" routerLinkActive="active">Home</a> | <a routerLink="/about" routerLinkActive="active">About</a>'
})

export class MenuComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}