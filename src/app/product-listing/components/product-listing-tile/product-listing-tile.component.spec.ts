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

  //TODO event test
  // it('raises the selected event when clicked');

  // it('should', async () => {
  //   spyOn(component, 'onClick');

  //   const button = fixture.nativeElement.querySelector('.add-to-cart');
  //   button.click();

  //   fixture.whenStable().then(() => {
  //     expect(component.onClick).toHaveBeenCalled();
  //   });
  // });

  // it('should call onClick method', () => {

  // });

  //addtoclick event
});
