import { Component } from '@angular/core';
import { Sucursal } from '../../../core/models/sucursal'; 
import { Moneda } from '../../../core/models/moneda';
import { SucursalService } from '../../../core/services/sucursal.service'; 
import { MonedaService } from '../../../core/services/moneda.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-sucursal',
  templateUrl: './crear-sucursal.component.html',
  styleUrls: ['./crear-sucursal.component.css']
})
export class CrearSucursalComponent {
  nuevaSucursal: Sucursal = {
    id: 0,
    codigo: 0,
    descripcion: '',
    direccion: '',   
    identificacion: '', 
    fechaCreacion: new Date(),
    monedaID: 0
  };

  errorMensaje: string = '';
  monedas: Moneda[] = [];

  constructor(private sucursalService: SucursalService, private monedaService: MonedaService, private router: Router) { } 

  ngOnInit(): void {
    this.cargarMonedas();
  }

  cargarMonedas() {
    this.monedaService.obtenerMonedas().subscribe(
      (monedas) => {
        this.monedas = monedas;
      }
    );
  }

  guardarSucursal() {
    this.sucursalService.crearSucursal(this.nuevaSucursal).subscribe(
      (nuevaSucursal) => {
        this.router.navigate(['/sucursal/lista']);
      },
      (error) => {
        const errors = error.error.errors;
        if (errors) {
          for (const fieldName of Object.keys(errors)) {
            const errorMessages = errors[fieldName];
            for (const errorMessage of errorMessages) {
              this.errorMensaje += `Campo ${fieldName}: ${errorMessage}`;
            }
          }
        }
      }
    );
  }
  
}
