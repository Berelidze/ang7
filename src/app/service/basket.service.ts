import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Basket {
  id: number;
  name: string;
  price: number;

}

export interface postBasket {
  quantity: number;
  price: number;
  productId: number
}
export interface updateBasket {
  quantity: number;
  price: number;
  productId: number;
}

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private apiUrl = 'https://restaurant.stepprojects.ge/api/Baskets';

  constructor(private http: HttpClient) {}

  addToBasket(product: postBasket): Observable<any> {
    return this.http.post(`${this.apiUrl}/AddToBasket`, product);
  }

  deleteFromBasket(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/DeleteProduct/${id}`);
  }
  getBasket(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/GetAll`);
  }
  updateBasket(item: postBasket): Observable<any> {
    return this.http.put(`${this.apiUrl}/UpdateBasket`, item);
  }
}
