import { Moneda } from './moneda';

export interface Sucursal {
    id: number;
    codigo: number;
    descripcion: string;
    direccion: string;
    identificacion: string;
    fechaCreacion: Date;
    monedaID: number;
  }
  