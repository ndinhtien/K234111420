import { Component } from '@angular/core';
import { Customerservice } from '../customerservice';

@Component({
  selector: 'app-customerdetail',
  standalone: false,
  templateUrl: './customerdetail.html',
  styleUrl: './customerdetail.css',
})
export class Customerdetail {
  constructor(private cs: Customerservice){}
search_customer_by_id(id: string, 
  
  
  
  tdid:HTMLElement,
  tdname:HTMLElement,
  tdage:HTMLElement){
  let c=this.cs.get_customer_detail(id);
  if (c!=null){
    tdid.innerHTML=c.id;
    tdname.innerHTML=c.name;
    tdage.innerHTML=c.age.toString()
  }
  else{
    tdid.innerHTML="Not found"
    tdname.innerHTML="Not found"
    tdage.innerHTML="Not found"
    alert("Customer with id="+id+" not found")
  }
}
}
