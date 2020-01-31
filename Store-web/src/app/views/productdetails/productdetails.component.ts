import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/interface/products';
import { DataService } from 'src/app/services/data.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {

  products: Products[];

  @Input() deetsData: Products;

  constructor(private dService: DataService, private cService: CartService) { }

  ngOnInit() {
    this.products = this.dService.getProduct();
  }

  addToCart(item){
    this.cService.addItemsToCart(item);
  }

}
