import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
            {{doSomething()}}
            <h2>Header</h2>
            <a routerLink="/home" routerLinkActive="active">Home</a>

            <!-- Where router should display a view -->
            <router-outlet></router-outlet>
        
            <h3>Footer</h3>
             `,
})
export class AppComponent {
    constructor() {

    }

    doSomething() {
        return 'this might be a good place to '
        + 'read from session storage!';
    }
}

