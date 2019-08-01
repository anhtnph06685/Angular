import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductlistComponent} from '../app/productlist/productlist.component';
import {AddProductComponent} from '../app/add-product/add-product.component';
const routes: Routes = [
  {path: 'productlis', component: ProductlistComponent},
  {path: 'addproduct', component: AddProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
