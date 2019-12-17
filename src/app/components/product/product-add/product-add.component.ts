import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../../model/product';
import {ProdcutService} from '../../../service/prodcut.service';
import {Route, Router} from '@angular/router';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit, OnDestroy {

  public product: Product;
  public subscription: Subscription;

  constructor(
    public productService: ProdcutService,
    public routerService: Router
  ) { }

  ngOnInit() {
    this.product = new Product();
  }

  onAddProduct() {
    this.subscription = this.productService.addProduct(this.product).subscribe(data => {
      if (data && data.id) {
        this.routerService.navigate(['product']);
      }
    });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
