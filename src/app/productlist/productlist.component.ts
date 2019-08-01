import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/productlist/Products';
// import { data } from './data';
import { ProductService } from '../Services/product.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  title: string = "Products view";
  // products=data;
  products: Products[];
  isShow: boolean = false;
  selectedProduct: Products;
  constructor(private productService: ProductService) {
  }
  getProductService(): void {
    this.products = this.productService.getProduct();
  }
  ngOnInit() {
    this.getProductService();
  }
  // onClickme=event=>{
  //   // this.products.img="http://the7fashion.com/wp-content/uploads/2019/01/Gi%C3%A0y-th%E1%BB%83-thao-nam-%C4%91%E1%BA%B9p.jpg";
  //   console.log
  // }
  onClickme(product) {
    console.log(product);
    this.selectedProduct = product;
  }
  // selectedMovie: Products;
  // onSelect(movie: Products): void {
  //   this.selectedMovie = movie;
  // }
  removeProduct(product) {
    console.log(product);
    this.products = this.products.filter(item => item.id != product.id);
  }
  addClass() {
    this.isShow = true;
  }
  Classstyle() {
    return {
      'border': this.isShow,
      'shadow': this.isShow,
    }
  }
  address: string;
  getPhone(value) {
    console.log(value);
    this.address = value;
  }
}
