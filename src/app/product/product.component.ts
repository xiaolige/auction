import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../shared/product.service';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private keyword:string;
  private titleFilter:FormControl = new FormControl();
  private products: Array<Product>;
  private imgUrl="http://placehold.it/320x150";
  constructor(private productService:ProductService) {
    this.titleFilter.valueChanges
    .debounceTime(500)
       .subscribe(
         value=>this.keyword = value
       );
   }

  ngOnInit() {
    this.products=this.productService.getProducts();
  }

}

