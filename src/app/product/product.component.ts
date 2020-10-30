import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductItem } from './product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productItem: ProductItem[] = [
    new ProductItem(1, 'LOREM IPSUM', 750, '/assets/icon1.png'),
    new ProductItem(2,'LOREM IPSUM', 1330, '/assets/icon2.jpg'),
    new ProductItem(3,'LOREM IPSUM', 102, '/assets/icon3.png'),
    new ProductItem(4,'LOREM IPSUM', 200, '/assets/icon4.png'),
    new ProductItem(5,'LOREM IPSUM', 300, '/assets/icon5-.jpg'),
    new ProductItem(6,'LOREM IPSUM', 400, '/assets/icon6.png'),
    new ProductItem(7,'LOREM IPSUM', 500, '/assets/icon7.png'),
    new ProductItem(8,'LOREM IPSUM', 600, '/assets/icon8.png'),
    new ProductItem(9,'LOREM IPSUM', 700, '/assets/icon9.png'),
  ]

  @Output() cartUpdated = new EventEmitter<{
    productId: number,
    productName: string,
    productPrice: number
  }>();

  constructor() { }

  ngOnInit() {
  }

  onCartUpdated(event) {
    const id = event.target.getAttribute('id');
    const index = this.productItem.findIndex(elem => elem.id == id);
    this.cartUpdated.emit({
        productId: this.productItem[index].id,
        productName: this.productItem[index].name,
        productPrice: this.productItem[index].price
      });
}


}
