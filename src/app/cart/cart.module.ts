import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { ProductListingModule } from '@app/product-listing/product-listing.module';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, ProductListingModule],
  exports: [CartComponent],
})
export class CartModule {}
