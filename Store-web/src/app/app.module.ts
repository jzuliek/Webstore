import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { MainComponent } from './views/main/main.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { HeroIComponent } from './views/hero-i/hero-i.component';
import { DividerComponent } from './views/divider/divider.component';
import { LandingComponent } from './views/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    NavbarComponent,
    HeroIComponent,
    DividerComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
