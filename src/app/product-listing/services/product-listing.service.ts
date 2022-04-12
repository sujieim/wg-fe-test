import { Injectable } from '@angular/core';
import { Product } from '@shared/interfaces/product';
import { catchError, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductListingService {
  private productsUrl = 'api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      catchError((err) => {
        throw 'error in fetching product. Details: ' + err;
      })
    );
  }
}
