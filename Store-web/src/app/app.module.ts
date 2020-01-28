import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {CarouselModule} from 'primeng/carousel';

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
import { LoginComponent } from './views/forms/login/login.component';
import { CreateAccountComponent } from './views/forms/create-account/create-account.component';
import { CheckoutComponent } from './views/forms/checkout/checkout.component';
import { ProductsComponent } from './views/products/products.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { CartComponent } from './components/cart/cart.component';
import { TimepickerComponent } from './components/timepicker/timepicker.component';
import { DropdownServicesComponent } from './components/dropdown-services/dropdown-services.component';
import { ProductdetailsComponent } from './views/productdetails/productdetails.component';
import { ProductlistComponent } from './views/productlist/productlist.component';

const appRoutes: Routes =[
  {path: 'landing', component: LandingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'products', component: ProductsComponent},
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
    LoginComponent,
    CreateAccountComponent,
    CheckoutComponent,
    ProductsComponent,
    DatePickerComponent,
    CartComponent,
    TimepickerComponent,
    DropdownServicesComponent,
    ProductdetailsComponent,
    ProductlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CarouselModule,
    RouterModule.forRoot(
      appRoutes,{enableTracing:true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  model: NgbDateStruct;
  placement = 'bottom';

  time = {hour: 13, minute: 30};
  meridian = true;


 }
