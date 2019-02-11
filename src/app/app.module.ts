import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent }  from './app.component';
import { HomeComponent } from './app.home';
import { DetailComponent } from './app.detail';
import { routing }       from './app.routing';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './app.menu';
import { NameDirective } from './name.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, DetailComponent, HomeComponent, AboutComponent, MenuComponent, NameDirective
  ],
  imports: [
    BrowserModule, HttpModule, routing, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
