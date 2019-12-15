import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/models/Customer.model';

@Injectable()
export class CustomerService {
    Api = "http://5dc58d360bbd050014fb8b25.mockapi.io/api/customers";
    constructor(
        private http: HttpClient
    ) { }

    getAll(): Observable<Customer[]> {
        return this.http.get<Customer[]>(this.Api);
    }

    getById(id: number): Observable<any> {
        return this.http.get(`${this.Api}/${id}`); 
    }

    updateById(id: number, customer: Customer): Observable<Customer> {
        return this.http.put<Customer>(`${this.Api}/${id}`, customer);
    }

    deleteById(id: number): Observable<Customer> {
        return this.http.delete<Customer>(`${this.Api}/${id}`);
    }

    
    addNew(customer: Customer): Observable<Customer> {
        return this.http.post<Customer>(this.Api, customer);
    }
}