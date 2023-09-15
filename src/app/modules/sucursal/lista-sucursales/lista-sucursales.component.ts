import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../../../core/models/sucursal';
import { SucursalService } from '../../../core/services/sucursal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-sucursales',
  templateUrl: './lista-sucursales.component.html',
  styleUrls: ['./lista-sucursales.component.css'],
})

export class ListaSucursalesComponent implements OnInit {
  sucursales: Sucursal[] = [];

  constructor(private sucursalService: SucursalService, private router: Router) { }

  ngOnInit(): void {
    this.listarSucursales();
  }

  listarSucursales(): void {
    this.sucursalService.obtenerSucursales().subscribe(data => {
      this.sucursales = data;
    });
  }

  editarSucursal(sucursal: Sucursal): void {

  }

  eliminarSucursal(sucursal: Sucursal) {
    this.sucursalService.eliminarSucursal(sucursal.id).subscribe(
      () => {
        console.log('La sucursal se eliminó correctamente.');
        this.listarSucursales();
      },
      (error) => {
        console.error('Error al eliminar la sucursal:', error);
      }
    );
  }

  navegarACrearSucursal() {
    this.router.navigate(['/sucursal/crear']);
  }
}
