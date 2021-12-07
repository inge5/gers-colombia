import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {
  public base: string;
  public url: string;
  constructor(public _http: HttpClient){
      this.base = environment.base;
      this.url = environment.url;
  }

  getHome(): Observable<any>{
    return this._http.get(`${this.base}/pages/2/`);
  }

  getProyects(): Observable<any>{
    return this._http.get(`${this.url}/proyectos?per_page=40`);
  }
}