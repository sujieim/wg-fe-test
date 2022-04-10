import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListingContainerComponent } from './product-listing-container.component';

describe('ProductListingContainerComponent', () => {
  let component: ProductListingContainerComponent;
  let fixture: ComponentFixture<ProductListingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListingContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
