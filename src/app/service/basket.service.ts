import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Basket {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private apiUrl = 'https://restaurant.stepprojects.ge/api/Baskets';

  constructor(private http: HttpClient) {}

  addToBasket(product: Basket): Observable<any> {
    return this.http.post(`${this.apiUrl}/AddToBasket`, product);
  }

  deleteFromBasket(product: Basket): Observable<any> {
    return this.http.delete(`${this.apiUrl}/DeleteProduct`, {
      body: product,
    });
  }
  getBasket(): Observable<Basket[]> {
    return this.http.get<Basket[]>(`${this.apiUrl}/GetAll`);
  }
}
