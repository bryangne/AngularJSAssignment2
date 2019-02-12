import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MyCurrencyService } from './app.currencyservice';

@Component({
    template: `<br>
                <img [src]='getLogo(localID)' >
                <p>Current Price: \${{ getPrice() }} <app-arrows [symbol]='localID'></app-arrows></p>
                <p>Opening Price: \${{ open }}</p>
                <p>Closing Price: \${{ close }}</p>
                `,
    providers: [MyCurrencyService]
})
export class DetailComponent {
    // The constructor sets up the class.
    // Defining private parameters for services in the constructor initializes instances
    // for the entire class.
    constructor(private route: ActivatedRoute,
        private currencyService: MyCurrencyService) {
    }
    localID: string;
    open: number;
    close: number;
    price: string;
    // ngOnInit() gets called after the object is set up via the constructor.
    // At this point, the class is able to handle the parameters passed to it.
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.localID = params['symbol'];
            this.getCurrencyInformation();
        });
    }

    getLogo(symbol: string) {
        if(symbol === "BTC") { return 'https://www.cryptocompare.com/media/19633/btc.png'; }
        if(symbol === "ETH") { return "https://www.cryptocompare.com/media/20646/eth_logo.png"; }
        return "https://www.cryptocompare.com/media/19782/litecoin-logo.png";
    }
    
    getPrice() {
        this.price = sessionStorage.getItem(this.localID);
        // console.log(this.price);
        return(this.price);
    }

    getCurrencyInformation() {
        // console.log('my price is ' + this.price);
        
        // Get the detail for open and close prices
        this.currencyService.getCurrencyDetail(this.localID)
            .subscribe(
                // 1. Handle successful data.
                data => {

                    // Log the data in the console to see what it looks like.
                    // Be sure to use the debugger.
                    // console.log(JSON.stringify(data));
                    let FINAL_UPDATE = 1;
                    let priceInfo = data["Data"][FINAL_UPDATE];
                    this.open = priceInfo.open;
                    this.close = priceInfo.close;
                    // console.log('/' + this.open + '/' + this.close);
                },
                // 2. Handle error.
                error => {
                    alert(error)
                });
    }
}
