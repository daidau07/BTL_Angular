import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from 'src/app/models/Customer.model';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  public subscription: Subscription;
  customers: Customer[];
  constructor(
    public customerService: CustomerService
  ) { }
  ngOnInit() {
    this.subscription = this.customerService.getAll().subscribe(data => {
      console.log(data);
      this.customers = data;
    });
  }
  onDelete(id: number) { this.subscription = this.customerService.deleteById(id).subscribe((data: Customer) => { this.updateAfterDelete(id); }); }
  updateAfterDelete(id: number) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id == id) {
        this.customers.slice(i, 1);
        break;
      }
    }
  }
  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}