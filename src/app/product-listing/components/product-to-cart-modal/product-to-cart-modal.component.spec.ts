import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ProductToCartModalComponent } from './product-to-cart-modal.component';

describe('ProductToCartModalComponent', () => {
  let component: ProductToCartModalComponent;
  let fixture: ComponentFixture<ProductToCartModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductToCartModalComponent],
      providers: [NgbActiveModal],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductToCartModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
