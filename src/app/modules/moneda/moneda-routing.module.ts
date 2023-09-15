import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaMonedasComponent } from './lista-monedas/lista-monedas.component';

const routes: Routes = [
  { path: 'lista', component: ListaMonedasComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonedaRoutingModule {}
