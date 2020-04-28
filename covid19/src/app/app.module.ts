import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import {HttpClientModule}  from '@angular/common/http';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component'
import { GoogleChartsModule } from 'angular-google-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfoComponent } from './components/info/info.component';
import { Home2Component } from './components/home2/home2.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CountriesComponent,
    DashboardCardComponent,
    InfoComponent,
    Home2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    GoogleChartsModule,
    FontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }