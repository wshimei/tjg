import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url: string = '/assets/data/products.json'

  constructor(private http: HttpClient) { }

  getProducts(): Observable<EProduct[]> {
    return this.http.get<EProduct[]>(this._url);
  }
}
