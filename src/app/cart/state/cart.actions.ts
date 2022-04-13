import { Product } from '@app/shared/interfaces/product';
import { createAction, props } from '@ngrx/store';

export const addProduct = createAction(
  '[Cart] Add Product',
  props<{ item: Product }>()
);
