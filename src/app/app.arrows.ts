import { Component, OnInit, Input } from '@angular/core';
import {  MyCurrencyService } from './app.currencyservice';
@Component({
    selector: 'app-arrows',
    template: `<font *ngIf='up' color = 'green'>&uarr;</font> <font *ngIf='!up' color = 'red'>&darr;</font>`
})

export class ArrowComponent implements OnInit {
    
    @Input()
    symbol: string;
    up: boolean;
    constructor(private currencyService: MyCurrencyService) { }


    ngOnInit() {
        let openPrice: number;
        let closePrice: number;
        // console.log(this.symbol);
        this.currencyService.getCurrencyDetail(this.symbol).subscribe(
            // 1. Handle successful data.
            data => {

                // Log the data in the console to see what it looks like.
                // Be sure to use the debugger.
                // console.log(JSON.stringify(data));
                let FINAL_UPDATE = 1;
                let priceInfo = data["Data"][FINAL_UPDATE];
                openPrice = priceInfo.open;
                closePrice = priceInfo.close;
                if(openPrice < closePrice){ this.up = false; }
                // let difference = closePrice - openPrice;
                // console.log('open: ' + openPrice + ' close: ' + closePrice + " difference: " + difference);
            },
            // 2. Handle error.
            error => {
                alert(error)
            });
        // console.log('close: ' + closePrice + ' open: ' + openPrice);
    }
}