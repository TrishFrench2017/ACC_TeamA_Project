import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavMain } from './navbar.component';
import { HeroUnit } from './hero.component';
import { ProgressBar } from './progress.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMain,
    HeroUnit,
    ProgressBar
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, NavMain, HeroUnit, ProgressBar]
})
export class AppModule { }
