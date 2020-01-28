import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Products } from 'src/app/interface/products';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  @Output() selectedProduct = new EventEmitter();

  products: Products [] = [];
  constructor(private dService: DataService) { 

    this.products = dService.getProduct();
  }

  ngOnInit() {
  }
  
  productClicked(item:Products){
    
    this.selectedProduct.emit(item)

  }



}
