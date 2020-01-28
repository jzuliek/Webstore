import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/interface/products';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {

  @Input() deetsData: Products;

  constructor() { }

  ngOnInit() {
  }

}
