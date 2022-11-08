import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Order {
  productName: string;
  itemCost: number;
}



@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order: Order[] = [];
  constructor(private http: HttpClient) {

   }

   getCustomerOrder(id) {
    return this.http.get(`http://localhost:3000/api/orders/${id}`);
  }
}
