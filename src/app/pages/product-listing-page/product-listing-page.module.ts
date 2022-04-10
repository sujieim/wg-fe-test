import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListingPageComponent } from './product-listing-page.page';
import { RouterModule } from '@angular/router';
import { ProductListingPageRoutingModule } from './product-listing-page-routing.module';
import { ProductListingModule } from 'src/app/product-listing/product-listing.module';

@NgModule({
  declarations: [ProductListingPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProductListingPageRoutingModule,
    ProductListingModule,
  ],
})
export class ProductListingPageModule {}
