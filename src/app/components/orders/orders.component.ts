import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer, CustomerService, } from 'src/app/services/customer.service';
import { Order, OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  customer: Customer;
  orders: Order[]=[];
  orders1: Order[]=[];
  orders2: Order[]=[];
  arrs = new Array<{productName: string, itemCost: number}>();

  constructor(
    private activetedRoute: ActivatedRoute,

    private orderService:OrderService,

  ) {}

  ngOnInit(): void {
    let id = this.activetedRoute.snapshot.params['id'];
    console.log("id", id);

    this.orderService.getCustomerOrder(id).subscribe(
      (res: Customer) => {

        this.customer = res
        console.log('customer',this.customer);
        this.orders1 = this.customer.orders;
        console.log('this.orders1',this.orders1)
        console.log('order',this.customer.orders);
        this.arrs = this.orders1.map(e=>e);
        console.log('orders2',this.orders2);
        
         console.log('arr',this.arrs);
        // this.orders = this.customer.orders
      },
      (err) => {}
    );
  
  }

  
}
