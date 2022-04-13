import { createReducer, on } from '@ngrx/store';

import { addProduct } from './cart.actions';
import { CartState } from './cart.state';

export const initialState: CartState = { items: [] };

export const cartReducer = createReducer(
  initialState,
  on(addProduct, (state, { item }) => {
    if (state.items.findIndex((product) => product.sku === item.sku) > -1) {
      return state;
    }

    return { ...state, items: [...state.items, item] };
  })
);
