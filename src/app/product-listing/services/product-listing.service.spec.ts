import { defer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ProductListingService } from './product-listing.service';

describe('ProductListingService', () => {
  let service: ProductListingService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductListingService],
    });

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ProductListingService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected products', (done: DoneFn) => {
    const expectedProducts = [
      {
        sku: '671695659-X',
        name: 'Veal Inside - Provimi',
        price: 166,
        rrp: 223,
        image: 'http://dummyimage.com/300x300.png/ff4444/ffffff',
      },
    ];
    httpClientSpy.get.and.returnValue(asyncData(expectedProducts));

    service.getProducts().subscribe({
      next: (products) => {
        expect(products)
          .withContext('expected products')
          .toEqual(expectedProducts);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });
});

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
