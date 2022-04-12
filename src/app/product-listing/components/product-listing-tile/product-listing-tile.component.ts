import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  open(product: Product) {
    const modalRef = this.modalService.open(ProductToCartModalComponent, {
      size: 'sm',
    });
    modalRef.componentInstance.product = product;
  }
}
