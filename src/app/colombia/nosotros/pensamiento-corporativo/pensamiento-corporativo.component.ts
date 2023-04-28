import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagesService } from '../../../services/pages.service';

@Component({
  selector: 'app-pensamiento-corporativo',
  templateUrl: './pensamiento-corporativo.component.html',
  styleUrls: ['./pensamiento-corporativo.component.css'],
})
export class PensamientoCorporativoComponent implements OnInit {
  proposito_empresa_data: any[] = [];
  valor_corporativo_columna1_data: any[] = [];
  valor_corporativo_columna2_data: any[] = [];
  imagen_proposito_data: any;
  titulo_valores_data: any;
  seccion_compromisos_data: any = {};
  seccion_propuesta_data: any = {};
  titulo_pilares_data: any;
  pilar_data: any[] = [];
  mapa_procesos_data: any;
  quienes_somos: string = '';

  loader = true;

  constructor(
    private httpClient: HttpClient,
    private _pensamientocorporativo: PagesService
  ) {}

  ngOnInit(): void {
    this._pensamientocorporativo
      .getPensamientoCorporativo()
      .subscribe((res: any) => {
        this.loader = false;
        this.proposito_empresa_data = res.acf.proposito_empresa;
        this.imagen_proposito_data = res.acf.imagen_proposito;
        this.titulo_valores_data = res.acf.titulo_valores;
        this.valor_corporativo_columna1_data =
          res.acf.valor_corporativo_columna1;
        this.valor_corporativo_columna2_data =
          res.acf.valor_corporativo_columna2;
        this.seccion_compromisos_data = res.acf.seccion_compromisos;
        this.seccion_propuesta_data = res.acf.seccion_propuesta;
        this.titulo_pilares_data = res.acf.titulo_pilares;
        this.pilar_data = res.acf.pilar;
        this.mapa_procesos_data = res.acf.mapa_procesos;
        this.quienes_somos = res.acf.quienes_somos;
      });
  }
}
