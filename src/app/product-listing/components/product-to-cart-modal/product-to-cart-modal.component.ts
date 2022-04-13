import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '@app/shared/interfaces/product';

@Component({
  selector: 'app-product-to-cart-modal',
  templateUrl: './product-to-cart-modal.component.html',
  styleUrls: ['./product-to-cart-modal.component.scss'],
})
export class ProductToCartModalComponent implements OnInit {
  @Input() product?: Product;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
