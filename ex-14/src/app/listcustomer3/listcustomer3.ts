import { Component } from '@angular/core';
import { Customerservice } from '../customerservice';
@Component({
  selector: 'app-listcustomer3',
  standalone: false,
  templateUrl: './listcustomer3.html',
  styleUrl: './listcustomer3.css',
})
export class Listcustomer3 {
  customers: any
  arr_ages: number[] = [];
  constructor(private cs: Customerservice) {
    for(let i=20; i<=100; i++){
      this.arr_ages[i-20]=i;
    }
    this.do_filter(20, 100);
  }
  do_filter(fromAge: any, toAge: any) {
    this.customers = this.cs.filter_customers_by_age(fromAge,toAge);
  }

}
