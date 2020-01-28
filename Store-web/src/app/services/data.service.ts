import { Injectable } from '@angular/core';
import { Products } from '../interface/products';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private productDeetsdata: Products;
  private productData: Products[]=[
    {
      id:1,
      productName: 'Lash 1',
      productDesc: 'cool lashes',
      price: '1 dolla',
      image: '/assets/lash1.jpeg'

    },
    {
      id:2,
      productName: 'Lash 2',
      productDesc: 'very good lashes',
      price: '4 dolla',
      image: '/assets/lash2.jpeg'

    },
    {
      id:3,
      productName: 'Lash 3',
      productDesc: 'not cool lashes',
      price: '9 dolla',
      image: '/assets/lash3.jpg'

    },
    {
      id:4,
      productName: 'Lash 4',
      productDesc: 'bad lashes',
      price: '9 dolla',
      image: '/assets/placeholder-product.png'

    },
    {
      id:5,
      productName: 'Lash 5',
      productDesc: 'cool lashes',
      price: '1 dolla',
      image: '/assets/placeholder-product.png'

    },
    {
      id:6,
      productName: 'Lash 6',
      productDesc: 'cool lashes',
      price: '1 dolla',
      image: '/assets/placeholder-product.png'

    },
    {
      id:7,
      productName: 'Lash 7',
      productDesc: 'cool lashes',
      price: '1 dolla',
      image: '/assets/placeholder-product.png'

    }
  ];
  constructor() { }

  getProduct(): Products[]{
    return this.productData;
  }

  setProductdeets(item: Products){
    this.productDeetsdata = item;
  }

  getProductdeets(): Products{
    return this.productDeetsdata;
  } 
}
