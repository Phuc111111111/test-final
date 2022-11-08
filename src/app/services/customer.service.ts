import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './order.service';

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  city: string;
  state: {};
  orders: Order[];
  latitude: number;
  longitude: number;
}



@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customers: Customer[] = [];
  order: Order[] = [];

  constructor(private http: HttpClient) {}

  getAllCustomers() {
    return this.http.get('http://localhost:3000/api/customers');
  }

  getCustomerDetail(id) {
    return this.http.get(`http://localhost:3000/api/customers/${id}`);
  }


}
