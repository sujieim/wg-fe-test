import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListingRoutingModule } from './product-listing-routing.module';
import { ProductListingContainerComponent } from './components/product-listing-container/product-listing-container.component';
import { ProductListingItemComponent } from './components/product-listing-item/product-listing-item.component';

@NgModule({
  declarations: [ProductListingContainerComponent, ProductListingItemComponent],
  imports: [CommonModule, RouterModule, ProductListingRoutingModule],
})
export class ProductListingModule {}
