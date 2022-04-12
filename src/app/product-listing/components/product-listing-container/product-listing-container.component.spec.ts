import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListingService } from '@app/product-listing/services/product-listing.service';
import { of } from 'rxjs';

import { ProductListingContainerComponent } from './product-listing-container.component';

const result = [
  {
    sku: '671695659-X',
    name: 'Veal Inside - Provimi',
    price: 166,
    rrp: 223,
    image: 'http://dummyimage.com/300x300.png/ff4444/ffffff',
  },
];
const productListingServiceStub = {
  getProducts() {
    return of(result);
  },
};

describe('ProductListingContainerComponent', () => {
  let component: ProductListingContainerComponent;
  let fixture: ComponentFixture<ProductListingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListingContainerComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ProductListingService, useValue: productListingServiceStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return expected products from products$', () => {
    fixture.detectChanges();
    let subscribed: any[] = [];
    fixture.componentInstance.products$.subscribe((products) => {
      subscribed = products;
    });
    expect(subscribed).toEqual(result);
  });
});
