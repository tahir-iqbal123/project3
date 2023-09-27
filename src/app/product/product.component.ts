import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product = [
    {id:1, name:'Alexander Shorokhoff Watch', price:'$1800', color: 'Black', available:'Available', image:'assets/products/1.jpg'},
    {id:1, name:'Ateliers de Monaco Watch', price:'$22800', color: 'Green', available:'Not Available', image:'assets/products/2.jpg'},
    {id:1, name:'Carl Suchy & Söhne Watch', price:'$800', color: 'Silver', available:'Available', image:'assets/products/3.jpg'},
    {id:1, name:'Ludovic Ballouard Watch', price:'$7855', color: 'Golden', available:'Not Available', image:'assets/products/4.jpg'},
    {id:1, name:'Singer Reimagined Watch', price:'$12899', color: 'Dark Gray', available:'Available', image:'assets/products/5.png'},
  ];
}
