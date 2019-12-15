import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Subscription } from 'rxjs';
import { Customer } from 'src/app/models/Customer.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  currentCustomer: Customer = new Customer();
  subscription: Subscription;
  subscriptionParams: Subscription;
  public customerModelId = 0;
  public formTitle;
  constructor(
    private customerService: CustomerService,
    private routerService: Router,
    private activeRouteService: ActivatedRoute) { }
  ngOnInit() {
    this.loadData();
  }


  loadData() {
    this.subscriptionParams = this.activeRouteService.paramMap.subscribe(params => {
      let id = params.get("id");
      this.customerModelId = Number(id);
      this.subscription = this.customerService.getById(this.customerModelId).subscribe((data: Customer) => {
        this.currentCustomer = data;
      });
    });
  }

  
  onAdd() {
  this.subscription = this.customerService.addNew(this.currentCustomer).subscribe(data => {
    this.routerService.navigateByUrl('customer');
  })
  }

  Onsubmit() {
    if (!this.customerModelId || this.customerModelId === 0) {
      this.onAdd();
    }
    else {
      this.onUpdate();
    }
  }
  

  onUpdate() {
  this.subscription = this.customerService.updateById(this.customerModelId, this.currentCustomer).subscribe((data: Customer) => {
    this.routerService.navigateByUrl('customer');
  })
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