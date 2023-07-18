import { Component, Input} from '@angular/core';
import {Product } from '../../Models/product.model';

@Component({
  selector: 'app-product',//el nombre que puedo exportar, como el Id
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product!:  Product;
  

}
