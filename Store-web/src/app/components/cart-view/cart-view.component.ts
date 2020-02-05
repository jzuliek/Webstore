import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interface/products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {

  coCount = 0;

  coItems: Products[] =[];
  showList = false;
  coTotal = 0;

  constructor(private coService:CartService) { }

  ngOnInit() {
    this.coService.$cartItems.subscribe(items =>{
      this.coItems = items;
      
    });
    this.coService.$cartTotal.subscribe(total =>{
      this.coTotal = total;
      
    });
    this.coService.$cartQty.subscribe(count =>{
      this.coCount = count;
      
    });
  }
}
