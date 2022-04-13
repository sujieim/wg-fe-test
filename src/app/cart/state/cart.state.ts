import { Product } from '@app/shared/interfaces/product';

export interface CartState {
  items: ReadonlyArray<Product>;
}
