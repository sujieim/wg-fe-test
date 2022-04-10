import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../shared/data/product'; //TODO

@Component({
  selector: 'app-product-listing-item',
  templateUrl: './product-listing-item.component.html',
  styleUrls: ['./product-listing-item.component.scss'],
})
export class ProductListingItemComponent implements OnInit {
  @Input() product?: Product;
  constructor() {}

  ngOnInit(): void {}
}
