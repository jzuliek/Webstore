import { Injectable } from '@angular/core';
import { Products } from '../interface/products';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private productDeetsdata: Products;
  private productData: Products[]=[
    {
      id:'1',
      productName: 'QueenS',
      productDesc: 'Glamorized and handcrafted silk lashes to perfection',
      price: '12',
      image: '/assets/lash1.jpeg',
      qty: 0

    },
    {
      id:'2',
      productName: 'PrincessV',
      productDesc: 'Glamorized and handcrafted silk lashes to perfection',
      price: '12',
      image: '/assets/lash2.jpeg',
      qty: 0

    },
    {
      id:'3',
      productName: 'Reyna',
      productDesc: 'Glamorized and handcrafted silk lashes to perfection',
      price: '12',
      image: '/assets/lash3.jpg',
      qty: 0

    },
    {
      id:'4',
      productName: 'Jenngo',
      productDesc: 'Glamorized and handcrafted silk lashes to perfection',
      price: '12',
      image: '/assets/placeholder-product.png',
      qty: 0

    },
    {
      id:'5',
      productName: 'HennesseyLi',
      productDesc: 'Glamorized and handcrafted silk lashes to perfection',
      price: '14',
      image: '/assets/placeholder-product.png',
      qty: 0

    },
    {
      id:'6',
      productName: 'Jbae',
      productDesc: 'Glamorized and handcrafted mink lashes to perfection',
      price: '12',
      image: '/assets/placeholder-product.png',
      qty: 0

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
