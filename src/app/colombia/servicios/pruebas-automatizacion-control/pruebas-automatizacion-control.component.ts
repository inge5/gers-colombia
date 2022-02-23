import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';
import { PagesService } from '../../../services/pages.service';

@Component({
  selector: 'app-pruebas-automatizacion-control',
  templateUrl: './pruebas-automatizacion-control.component.html',
  styleUrls: ['./pruebas-automatizacion-control.component.css'],
})
export class PruebasAutomatizacionControlComponent implements OnInit {
  loader = true;
  seccion_1_data: any = {};
  seccion_iconos_data: any[] = [];
  primer_icono_data: any = {};
  texto_columna_1_data: any = {};
  texto_columna_2_data: any = {};

  constructor(
    private _pruebasautomatizacioncontrol: PagesService,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this._pruebasautomatizacioncontrol
      .getPruebaAutomatizacionSeo()
      .subscribe((resp: any) => {
        console.log(resp.acf);
        this.seo.paginaMetaData(
          resp.acf.titulo_seo,
          resp.acf.descripcion_seo,
          resp.acf.keywords_seo,
          resp.acf.image_seo
        );
      });
    this._pruebasautomatizacioncontrol
      .getPruebasAutomatizacionControl()
      .subscribe((res: any) => {
        this.loader = false;
        this.seccion_1_data = res.acf.seccion_1;
        this.seccion_iconos_data = res.acf.seccion_iconos;
        this.primer_icono_data = res.acf.primer_icono;
        this.texto_columna_1_data = res.acf.texto_columna_1;
        this.texto_columna_2_data = res.acf.texto_columna_2;
      });
  }
}
