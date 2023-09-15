import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Moneda } from '../models/moneda';
import { API_URLS } from '../../api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class MonedaService {

  private apiUrl = API_URLS.monedas; 

  constructor(private http: HttpClient) {}

  obtenerMonedas(): Observable<Moneda[]> {
    const apiUrl = API_URLS.monedas; 
    return this.http.get<Moneda[]>(apiUrl);
  }

  obtenerMonedaPorId(id: number): Observable<Moneda> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Moneda>(url);
  }

  crearMoneda(moneda: Moneda): Observable<Moneda> {
    return this.http.post<Moneda>(this.apiUrl, moneda);
  }

  actualizarMoneda(id: number, moneda: Moneda): Observable<Moneda> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Moneda>(url, moneda);
  }

  eliminarMoneda(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
