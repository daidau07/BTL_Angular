import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomerComponent } from './components/customer/customer.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerFormComponent } from './components/customer/customer-form/customer-form.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { ProductAddComponent } from './components/product/product-add/product-add.component';


const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
    children : [
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: 'list',
        component: ProductListComponent
      },
      {
        path: 'edit/:id',
        component: ProductEditComponent
      },
      {
        path: 'add',
        component: ProductAddComponent
      }
    ]
  },
  {
    path: 'customer',
    component: CustomerComponent,
    children: [
      {
        path: '',
        component: CustomerListComponent
      },
      {
        path: ':id/edit',
        component: CustomerFormComponent
      },
      {
        path: 'add',
        component: CustomerFormComponent
      },
    ]
  },
  {
    path: 'invoice',
    component: InvoiceComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
