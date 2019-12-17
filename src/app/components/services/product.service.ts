import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProdcutService {
  public API: string = 'http://5dea80f10710f800142103c0.mockapi.io/product';
  constructor(
    public http: HttpClient
  ) { }
  getAllProduct(): Observable<[Product]> {
    return this.http.get<[Product]>(this.API);
  }
  getFirstProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.API}/${id}`);
  }
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.API, product);
  }
  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.API}/${id}`);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.API}/${product.id}`, product);
  }

}
