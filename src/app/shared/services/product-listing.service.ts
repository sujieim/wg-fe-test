import { Injectable } from '@angular/core';
import { Product } from '../data/product';
import { PRODUCTS } from '../data/mock-products'; //TODO
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductListingService {
  // class property
  products = new BehaviorSubject([...PRODUCTS]);

  constructor() {}

  getProducts(): Observable<Product[]> {
    // return of(PRODUCTS);

    // set(product): {
    //   this.products.next([...PRODUCTS, product]);
    // }

    // update(): {

    // }
    return this.products.asObservable();
  }
}
