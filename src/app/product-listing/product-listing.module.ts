import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListingRoutingModule } from './product-listing-routing.module';
import { ProductListingContainerComponent } from './components/product-listing-container/product-listing-container.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListingTileComponent } from './components/product-listing-tile/product-listing-tile.component';
import { ProductToCartModalComponent } from './components/product-to-cart-modal/product-to-cart-modal.component';

@NgModule({
  declarations: [
    ProductListingContainerComponent,
    ProductDetailComponent,
    ProductListingTileComponent,
    ProductToCartModalComponent,
  ],
  imports: [CommonModule, RouterModule, ProductListingRoutingModule],
})
export class ProductListingModule {}
