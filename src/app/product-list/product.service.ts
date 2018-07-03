import { EProduct } from './product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url = '/assets/data/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<EProduct[]> {
    return this.http.get<EProduct[]>(this._url);
  }
}
