import { Component, OnInit } from '@angular/core';
import {Product} from 'src/app/products/Product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title: string ="Product view";
  product : Product={
    name: "Giay",
    desc: "new",
    img: "https://vn-test-11.slatic.net/original/2dbd60e52589cb9a3f906b4ca0a5bcd7.jpg",
    price: 50,
    statws: true,
  }
  constructor() { }

  ngOnInit() {
  }
  Clickme=event =>{
    this.product.img="http://the7fashion.com/wp-content/uploads/2019/01/Gi%C3%A0y-th%E1%BB%83-thao-nam-%C4%91%E1%BA%B9p.jpg";
  }

}
