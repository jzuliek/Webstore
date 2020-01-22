import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { MainComponent } from './views/main/main.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { HeroIComponent } from './views/hero-i/hero-i.component';
import { DividerComponent } from './views/divider/divider.component';
import { LandingComponent } from './views/landing/landing.component';
import { BookingComponent } from './views/booking/booking.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes =[
  {path: 'landing', component: LandingComponent},
  { path: '',
  redirectTo: '/landing',
  pathMatch: 'full'
  },
  {path: 'booking', component: BookingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    NavbarComponent,
    HeroIComponent,
    DividerComponent,
    LandingComponent,
    BookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,{enableTracing:true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
