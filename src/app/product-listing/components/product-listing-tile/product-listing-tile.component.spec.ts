import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListingTileComponent } from './product-listing-tile.component';

describe('ProductListingTileComponent', () => {
  let component: ProductListingTileComponent;
  let fixture: ComponentFixture<ProductListingTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListingTileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListingTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
