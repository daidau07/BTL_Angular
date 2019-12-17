import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProdcutService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  public subcription: Subscription;

  public product: Product[] = [];
  public productLast: Product[] = [];

  constructor(
    public productService: ProdcutService
  ) {
  }

  ngOnInit(): void {
    this.loaddata();

  }
  loaddata() {
    this.subcription = this.subcription = this.productService.getAllProduct().subscribe(data => {
        this.product = data;

      }, error => {
        console.log(error);
      }
    );
  }
  onDeleteProduct(id: number) {
    this.subcription = this.productService.deleteProduct(id).subscribe(data => {
      this.updateDataAfterDelete(id);
    });
  }
  updateDataAfterDelete(id: number) {
    for (var i = 0; i < this.product.length; i++) {
      if (this.product[i].id === id) {
        this.product.splice(i, 1);
        break;
      }
    }
  }
  ngOnDestroy(): void {

  }
}
