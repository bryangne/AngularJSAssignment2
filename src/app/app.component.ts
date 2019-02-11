import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'app-root',
    template: `
            <br>
            <app-menu></app-menu> Welcome {{ getName() }}

            <!-- Where router should display a view -->
            <router-outlet></router-outlet>
            <app-menu></app-menu> Uses https://www.cryptocompare.com/api/
             `,
})
export class AppComponent implements OnInit {

    ngOnInit() {
        // this.name = sessionStorage.getItem('name');
    }
    getName() {
        return (sessionStorage.getItem('name'));
    }
}

