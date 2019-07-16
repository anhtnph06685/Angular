import { Component, OnInit } from '@angular/core';
import {Products} from 'src/app/productlist/Products';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  title:string ="Products view";
  products: Products={
    name: "Tran Nam Anh",
    desc: "New",
    img: "https://vn-test-11.slatic.net/original/2dbd60e52589cb9a3f906b4ca0a5bcd7.jpg",
    price: 50,
    statws: true,
  }
  constructor() { }

  ngOnInit() {
  }
  onClickme=event=>{
    this.products.img="http://the7fashion.com/wp-content/uploads/2019/01/Gi%C3%A0y-th%E1%BB%83-thao-nam-%C4%91%E1%BA%B9p.jpg";
  }
}
