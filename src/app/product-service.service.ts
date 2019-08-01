import { Injectable } from '@angular/core';
import {data} from './productlist/data';
import { from } from 'rxjs';
import { Product } from './products/Product';
import { Products } from './productlist/Products';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  getProduct(): Products[]{
    return data;
  }
  constructor() { }
}
