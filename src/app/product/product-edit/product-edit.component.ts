import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productForm:FormGroup = new FormGroup({
    id:new FormControl(""),
    name :new FormControl(""),
    price :new FormControl(""),
    description :new FormControl("")
  })



  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private routers: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      let id = paramMap.get("id");
      let product;

      if( (product = this.productService.getProductById(id))!=null){
        console.log(product);
        this.productForm.controls['id'].setValue(product.id);
        this.productForm.controls['name'].setValue(product.name);
        this.productForm.controls['price'].setValue(product.price);
        this.productForm.controls['description'].setValue(product.description);
      }
    })
  }

  edit(){
    console.log("vào đây");
    let product = this.productForm.value;
    this.productService.edit(product);
    this.routers.navigate(['/product/list']);

  }




}
