import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingPageComponent } from './product-listing-page.page';

const routes: Routes = [
  {
    path: '',
    component: ProductListingPageComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../../product-listing/product-listing.module').then(
            (m) => m.ProductListingModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductListingPageRoutingModule {}
