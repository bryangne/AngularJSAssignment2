import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';
import { AppComponent }  from './app.component';
import { HomeComponent } from './app.home';
import { DetailComponent } from './app.detail';
import { routing }       from './app.routing';

@NgModule({
  declarations: [
    AppComponent, DetailComponent, HomeComponent
  ],
  imports: [
    BrowserModule, HttpModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
