import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './Models/product.model';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'midudev-app';
  http = inject(HttpClient);
  products: Product[] = [];


  changetitle() {
    this.title = "Primer proyecto de angular"
  }

  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.products = data;

      });
  }

}
