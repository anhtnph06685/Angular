import { Injectable } from '@angular/core';
import {data} from '../productlist/data';
// import { from } from 'rxjs';
import { Products } from '../productlist/Products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = data;
  getProduct():Products[]{
    return this.products;
  }
  constructor() { }
  addProduct(products){
  const newArr={id: this.products.length+1, status:true,price:600, ...products};
  return this.products.push(products);
  }
}
