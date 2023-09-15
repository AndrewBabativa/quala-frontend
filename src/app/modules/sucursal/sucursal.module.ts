import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaSucursalesComponent } from './lista-sucursales/lista-sucursales.component';
import { SucursalRoutingModule } from './sucursal-routing.module'; 
import { MatTableModule } from '@angular/material/table'; 
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CrearSucursalComponent } from './crear-sucursal/crear-sucursal.component'; 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListaSucursalesComponent,
    CrearSucursalComponent,
  ],
  imports: [
    SucursalRoutingModule,
    CommonModule,
    MatTableModule, 
    MatIconModule,
    MatButtonModule,
    FormsModule
  ]
})
export class SucursalModule { }
