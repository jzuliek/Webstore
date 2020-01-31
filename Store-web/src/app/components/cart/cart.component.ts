import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interface/products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartCount = 0;

  cartItems: Products[] =[];
  showList = false;
  cartTotal = 0;

  constructor(private cService: CartService) { }

  ngOnInit() {
    this.cService.$cartItems.subscribe(items =>{
      this.cartItems = items;
      
    });
    this.cService.$cartTotal.subscribe(total =>{
      this.cartTotal = total;
      
    });
    this.cService.$cartQty.subscribe(count =>{
      this.cartCount = count;
      
    });
  }

}
