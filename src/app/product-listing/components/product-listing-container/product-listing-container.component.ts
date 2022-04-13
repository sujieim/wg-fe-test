import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Store } from '@ngrx/store';
import { addProduct } from 'src/app/cart/state/cart.actions';

import { Product } from '@app/shared/interfaces/product';
import { ProductListingService } from '@app/product-listing/services/product-listing.service';

@Component({
  selector: 'app-product-listing-container',
  templateUrl: './product-listing-container.component.html',
  styleUrls: ['./product-listing-container.component.scss'],
})
export class ProductListingContainerComponent implements OnInit {
  products$: Observable<Product[]> = of([]);
  constructor(
    private productListingService: ProductListingService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.products$ = this.productListingService.getProducts();
  }

  productTrackBy(index: number, product: Product) {
    return product.sku;
  }

  onAdd(item: Product) {
    this.store.dispatch(addProduct({ item }));
  }
}
