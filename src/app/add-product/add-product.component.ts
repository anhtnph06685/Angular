import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { Products } from 'src/app/productlist/Products';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Output('keyPhone') onHandlePhone = new EventEmitter<string>();
  product: Products= new Products();
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }
  // Clickaddress(){
  //   this.onHandlePhone.emit(this.address);
  // }
  addProduct(){
    this.productService.addProduct(this.product);
  }
}
