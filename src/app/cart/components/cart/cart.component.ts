import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartItems } from '@app/cart/state/cart.selectors';
import { Product } from '@app/shared/interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  items$ = this.store.select(selectCartItems);

  constructor(private store: Store) {}

  productTrackBy(index: number, product: Product) {
    return product.sku;
  }
}
