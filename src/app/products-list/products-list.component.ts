import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass'],
})
export class ProductsListComponent {
  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }
}
