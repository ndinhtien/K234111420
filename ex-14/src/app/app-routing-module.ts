import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex10LunarYearComponent } from './lunar-year/lunar-year';

const routes: Routes = [
  { path: '', redirectTo: 'lunar', pathMatch: 'full' },
  // { path: 'lunar', component: Ex10LunarYearComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
