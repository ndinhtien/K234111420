import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Customerservice {
  customers=[
    {"id":"1", "name":"alice", "age":30,"picture":"../images/alice.jpg"},
    {"id":"2", "name":"bob", "age":32,"picture":"../images/bob.jpg"},
    {"id":"3", "name":"charlie", "age":35,"picture":"../images/charlie.jpg"}
    
  ];
  constructor() {}
  get_all_customers() {
    return this.customers
  }
  get_customer_detail(id:string){
    let c=this.customers.find(x => x.id == id);
    return c;
  }
  filter_customers_by_age(a: number, b:number){
    return this.customers.filter(c=> c.age>=a&&c.age<=b);
  }
}
