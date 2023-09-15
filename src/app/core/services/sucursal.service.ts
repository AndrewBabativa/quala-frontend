import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sucursal } from '../models/sucursal';
import { API_URLS } from '../../api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class SucursalService {

  private apiUrl = API_URLS.sucursales; 

  constructor(private http: HttpClient) {}

  obtenerSucursales(): Observable<Sucursal[]> {
    const apiUrl = API_URLS.sucursales; 
    return this.http.get<Sucursal[]>(apiUrl);
  }

  obtenerSucursalPorId(id: number): Observable<Sucursal> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Sucursal>(url);
  }

  crearSucursal(Sucursal: Sucursal): Observable<Sucursal> {
    console.log(JSON.stringify(Sucursal));
    return this.http.post<Sucursal>(this.apiUrl, Sucursal);
  }

  actualizarSucursal(id: number, Sucursal: Sucursal): Observable<Sucursal> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Sucursal>(url, Sucursal);
  }

  eliminarSucursal(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
