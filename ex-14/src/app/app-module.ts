import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Listcustomer } from './listcustomer/listcustomer';
import { Listcustomer2 } from './listcustomer2/listcustomer2';
import { Customerdetail } from './customerdetail/customerdetail';
import { Listcustomer3 } from './listcustomer3/listcustomer3';
import { HttpClientModule } from '@angular/common/http';
import { Ex14catelog } from './ex14catelog/ex14catelog';

@NgModule({
  declarations: [
    App,
    Listcustomer,
    Listcustomer2,
    Customerdetail,
    Listcustomer3,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ex14catelog
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule {}
