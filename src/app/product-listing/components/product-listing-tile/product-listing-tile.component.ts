import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Product } from '@app/shared/interfaces/product';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductToCartModalComponent } from '../product-to-cart-modal/product-to-cart-modal.component';

@Component({
  selector: 'app-product-listing-tile',
  templateUrl: './product-listing-tile.component.html',
  styleUrls: ['./product-listing-tile.component.scss'],
})
export class ProductListingTileComponent implements OnInit {
  @Input() product?: Product;
  @Output() add = new EventEmitter<Product>();
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  onClick(product: Product) {
    this.add.emit(product);
    this.open(product);
  }

  open(product: Product) {
    const modalRef = this.modalService.open(ProductToCartModalComponent, {
      size: 'sm',
    });
    modalRef.componentInstance.product = product;
  }
}
