import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
  AugmentsComponent, 
  ItemsComponent, 
  UnitsComponent
 } from './components';
 
const routes: Routes = [
  { path: 'augments', component: AugmentsComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'units', component: UnitsComponent }
];

@NgModule({
  declarations: [
    AugmentsComponent,
    ItemsComponent,
    UnitsComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatsRoutingModule { }
