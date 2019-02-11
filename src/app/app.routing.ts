import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { AppComponent }          from './app.component';
import { DetailComponent }       from './app.detail';
import { HomeComponent }         from './app.home';

const appRoutes: Routes = [
  { path: 'detail/:symbol', component: DetailComponent },
  { path: '**',     component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
