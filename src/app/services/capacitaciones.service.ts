import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CapacitacionesService {

  url: string = environment.url;

  constructor(private http: HttpClient) {
   }

   //Colombia

   getCapacitaciones(){
     return this.http.get(`${this.url}/capacitaciones`);
   }
   getCategoriaCapacitaciones(){
     return this.http.get(`${this.url}/categorias_capacitaciones`)
   }
   getCategoriaCapacitacionesId(id: number){
     return this.http.get(`${this.url}/categorias_capacitaciones/${id}`);
   }
   getCapacitacionesId(id: number){
    return this.http.get(`${this.url}/capacitaciones/${id}`);
  }
}
