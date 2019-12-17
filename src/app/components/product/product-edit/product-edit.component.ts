import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProdcutService } from '../../services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit, OnDestroy {

  public product: Product;
  public subscription: Subscription;
  public subscriptionParams: Subscription;
  constructor(
    public productService: ProdcutService,
    public routerService: Router,
    public activetedRouterService: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.product = new Product();
    this.loaddata();

  }
  loaddata() {
    this.subscriptionParams = this.activetedRouterService.params.subscribe((data: Params) => {
      let id = data[`id`];
      this.subscription = this.productService.getFirstProduct(id).subscribe((product: Product) => {
        this.product = product;
      });
    });
  }
  onUpdateProduct() {
    this.subscription = this.productService.updateProduct(this.product).subscribe((data: Product) => {
      this.routerService.navigate(['product']);
    });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionParams) {
      this.subscriptionParams.unsubscribe();
    }
  }

}
