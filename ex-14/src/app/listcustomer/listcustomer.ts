import { Component } from '@angular/core';

@Component({
  selector: 'app-listcustomer',
  standalone: false,
  templateUrl: './listcustomer.html',
  styleUrl: './listcustomer.css',
})
export class Listcustomer {
  customers=[
    {id:1, name:"alice", age:30,picture:"../images/alice.jpg"},
    {id:2, name:"bob", age:32,picture:"../images/bob.jpg"},
    {id:3, name:"charlie", age:35,picture:"../images/charlie.jpg"}
    
  ];

}
