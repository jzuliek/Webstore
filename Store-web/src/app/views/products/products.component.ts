import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interface/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  selectedProduct: Products;

  constructor() { }

  ngOnInit() {
  }

  onSelection(displayProduct:Products){
    
    this.selectedProduct = displayProduct;
  }

}
