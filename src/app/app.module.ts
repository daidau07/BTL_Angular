import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  NbThemeModule,
  NbLayoutModule,
  NbActionsModule, 
  NbIconModule, 
  NbSearchModule, 
  NbMenuModule, NbCardModule, NbSidebarModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HeaderComponent } from './components/theme/header/header.component';
import { FooterComponent } from './components/theme/footer/footer.component';
import { CustomerComponent } from './components/customer/customer.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { FormsModule } from '@angular/forms';
import { LayoutService } from './components/services/layout.service';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerFormComponent } from './components/customer/customer-form/customer-form.component';
import { CustomerService } from './components/services/customer.service';
import { ProductAddComponent } from './components/product/product-add/product-add.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { ProdcutService } from './components/services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    CustomerComponent,
    InvoiceComponent,
    CustomerListComponent,
    CustomerFormComponent,
    ProductAddComponent,
    ProductListComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule ,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbMenuModule.forRoot(),
    NbCardModule,
    NbActionsModule,
    NbSidebarModule.forRoot(),
    NbIconModule,
    NbSearchModule
  ],
  providers: [LayoutService,CustomerService,ProdcutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
