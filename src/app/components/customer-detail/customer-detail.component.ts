import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer, CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss'],
})
export class CustomerDetailComponent implements OnInit {
  constructor(
    private activetedRoute: ActivatedRoute,
    private customerService: CustomerService
  ) {}

  customer: Customer;

  ngOnInit(): void {
    let id = this.activetedRoute.snapshot.params['id'];
    console.log(id);
    this.customerService.getCustomerDetail(id).subscribe(
      (res: Customer) => {
        return (this.customer = res);
      },
      (err) => {}
    );
  }
}
