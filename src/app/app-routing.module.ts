import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'moneda', loadChildren: () => import('./modules/moneda/moneda.module').then(m => m.MonedaModule) },
  { path: 'sucursal', loadChildren: () => import('./modules/sucursal/sucursal.module').then(m => m.SucursalModule) },
  { path: '', redirectTo: '/sucursal', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/sucursal' }, 
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  
export class AppRoutingModule { }
