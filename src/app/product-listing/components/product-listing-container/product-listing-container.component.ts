import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '@shared/data/product';
import { ProductListingService } from '@shared/services/product-listing.service';

@Component({
  selector: 'app-product-listing-container',
  templateUrl: './product-listing-container.component.html',
  styleUrls: ['./product-listing-container.component.scss'],
})
export class ProductListingContainerComponent implements OnInit {
  products$: Observable<Product[]> = of([]); //TODO
  constructor(private productListingService: ProductListingService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.products$ = this.productListingService.getProducts();
    //// .subscribe((products) => (this.products = products
  }
}
