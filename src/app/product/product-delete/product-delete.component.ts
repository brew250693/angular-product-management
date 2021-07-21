import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product:any

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get("id");
      this.product = this.productService.getProductById(id);
    })
  }
  delete(){
    if(this.product as Product){
      this.productService.delete(this.product);
      this.router.navigate(["/product/list"]);

    }
  }

  back(){
    this.router.navigate(["/product/list"]);
  }
}



