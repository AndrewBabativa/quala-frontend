import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaSucursalesComponent } from './lista-sucursales/lista-sucursales.component';
import { CrearSucursalComponent } from './crear-sucursal/crear-sucursal.component';

const routes: Routes = [
  { path: 'lista', component: ListaSucursalesComponent },
  { path: 'crear', component: CrearSucursalComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SucursalRoutingModule {}
