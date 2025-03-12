import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private apiUrl = 'http://localhost:3000/api'; // URL de la API

  constructor(private http: HttpClient) {}

  getEmpleados(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/employees`);
  }

  createEmpleado(empleado: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/employees`, empleado);
  }

  deleteEmpleado(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/employees/${id}`);
  }

  getDepartamentos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/departments`);
  }

}
