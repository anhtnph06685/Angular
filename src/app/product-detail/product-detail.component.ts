import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../productlist/Products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() product : Products;
}
