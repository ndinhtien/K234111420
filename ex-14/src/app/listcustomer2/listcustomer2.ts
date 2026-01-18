import { Component } from '@angular/core';
import { Customerservice } from '../customerservice';

@Component({
  selector: 'app-listcustomer2',
  standalone: false,
  templateUrl: './listcustomer2.html',
  styleUrl: './listcustomer2.css',
})
export class Listcustomer2 {
 customers: any
 constructor(private cs: Customerservice){
  this.customers=cs.get_all_customers()
 }
}
