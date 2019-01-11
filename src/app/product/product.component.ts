import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolveComponentResources } from '@angular/core/src/metadata/resource_loading';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product={};
    // {id: 1, category:"beauty", price:100, name:"Fair&lovely", numberLike: 0, img:"https://media.self.com/photos/5b6b43b256b2e2706f755867/4:3/w_728/exfoliation-products.gif"},
    // {id: 2, category:"accesories", price:200, name:"Bag", numberLike: 0, img:"https://www.roadgods.com/pub/media/catalog/product/cache/696c1cf6d42ac1dfca877ef53143b9a0/g/o/gods_ghost_anti-theft_laptop_backpack_daring_texture_.jpg"},
    // {id: 3, category:"beauty", price:999, name:"Beardo", numberLike: 0, img:"https://beardoc.s3.ap-south-1.amazonaws.com/uploads/x300-banner-2-1284.jpg"}
  

  productList=[];

  // LikeButton(id){
  //    http:HttpClient;
  //    this.http.get('http://192.168.1.13:5000/product/'+id).subscribe(response=>{
  //     this.product=response;
  //     console.log(id);
  //   });    
  //   console.log(id);
  // }
  
  isBigEnough(element, index, array) { 
    return (element.category === "beauty"); 
 } 
 isBigEnough1(element, index, array) { 
  return (element.category === "accesories"); 
}
all(){
  // this.productList=this.product;
}

  // filterBy(filter:string){
  //   switch(filter){
  //     case 'beauty':
  //     this.productList=this.product.filter(this.isBigEnough);
  //     console.log("all selected");
  //     break;
  //      case 'accesories':
  //     this.productList=this.product.filter(this.isBigEnough1);
  //     console.log("all selected");
  //     break;
  //   }
  // }

  constructor( private http:HttpClient) { 
    http.get('http://192.168.1.13:5000/product').subscribe(response=>{
      this.product=response;
      console.log("this.product");
    });    
  }
  

  ngOnInit() {
    // this.productList=this.product;
  }

}
