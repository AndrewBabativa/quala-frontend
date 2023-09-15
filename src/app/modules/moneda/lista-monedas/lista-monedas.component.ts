import { Component, OnInit } from '@angular/core';
import { MonedaService } from '../../../core/services/moneda.service';
import { Moneda } from 'src/app/core/models/moneda';

@Component({
  selector: 'app-lista-monedas',
  templateUrl: './lista-monedas.component.html',
  styleUrls: ['./lista-monedas.component.css'],
})

export class ListaMonedasComponent implements OnInit {
  monedas: Moneda[] = [];

  constructor(private monedaService: MonedaService) {}

  ngOnInit(): void {
    this.obtenerMonedas();
  }

  obtenerMonedas(): void {
    this.monedaService.obtenerMonedas().subscribe((data) => {
      this.monedas = data;
    });
  }

}
