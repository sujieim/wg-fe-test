import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListingItemComponent } from './product-listing-item.component';

describe('ProductListingItemComponent', () => {
  let component: ProductListingItemComponent;
  let fixture: ComponentFixture<ProductListingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListingItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
