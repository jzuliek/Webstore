import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cartCount = 0;

  constructor(private cService: CartService) { }

  

  ngOnInit() {

    this.cService.$cartQty.subscribe(count =>{
      this.cartCount = count;
      
    });
    
  }

}
