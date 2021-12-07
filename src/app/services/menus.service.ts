import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class MenusService {
  public menu: string;
  
  constructor(public _http: HttpClient){
      this.menu = environment.menu;
  }

  getMenuPrincipal(): Observable<any>{
    return this._http.get(`${this.menu}/menus/main`);
  }

  getMenuFooter(): Observable<any>{
    return this._http.get(`${this.menu}/menus/57`);
  }

  getMenuFooterContacto(): Observable<any>{
    return this._http.get(`${this.menu}/menus/58`);
  }

  getMenuFooterCertificados(): Observable<any>{
    return this._http.get(`${this.menu}/menus/59`);
  }
}