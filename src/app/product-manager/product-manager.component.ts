import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  products: Product[];
  selected: Product;
  constructor(private productService: ProductService) { }

  ngOnInit() {
     this.getProducts();
  }
  showDetail(product) {
    this.selected = product;
  }
  getProducts() {
    this.products = this.productService.listProducts();
  }
   removeitem(id){
    //  console.log(id);
    //  this.products.filter(function(product){
    //    return this.product.id !== id;
    //  })
    this.products = this.products.filter(product=> product.id !== id);
    }
}