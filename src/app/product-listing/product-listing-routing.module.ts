import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingContainerComponent } from './components/product-listing-container/product-listing-container.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListingContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductListingRoutingModule {}
