import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailComponent } from './product-detail.component';

const PRODUCT = {
  sku: '671695659-X',
  name: 'Veal Inside - Provimi',
  price: 166,
  rrp: 223,
  image: 'http://dummyimage.com/300x300.png/ff4444/ffffff',
};

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind property product.title ', () => {
    component.product = PRODUCT;
    fixture.detectChanges();
    const productListingItemElement: HTMLElement = fixture.nativeElement;
    expect(
      productListingItemElement.querySelector('.title')?.textContent
    ).toEqual(PRODUCT.name);
  });
});
