import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonedaRoutingModule } from './moneda-routing.module'; 
import { ListaMonedasComponent } from './lista-monedas/lista-monedas.component';

@NgModule({
  declarations: [
    ListaMonedasComponent
  ],
  imports: [
    CommonModule,
    MonedaRoutingModule
  ]
})
export class MonedaModule { }
