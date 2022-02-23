import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';
import { PagesService } from '../../../services/pages.service';

@Component({
  selector: 'app-estudios-sistemas',
  templateUrl: './estudios-sistemas.component.html',
  styleUrls: ['./estudios-sistemas.component.css'],
})
export class EstudiosSistemasComponent implements OnInit {
  loader = true;
  seccion_1_data: any = {};
  seccion_iconos_data: any[] = [];
  item_tab_data: any[] = [];
  texto_columna_0_data: any = {};
  texto_columna_1_data: any = {};
  texto_columna_2_data: any = {};
  public activePillIndex: number = 0;

  constructor(
    private _estudiosistemaselectricos: PagesService,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this._estudiosistemaselectricos
      .getEstudiosSistemasSeo()
      .subscribe((resp: any) => {
        this.seo.paginaMetaData(
          resp.acf.titulo_seo,
          resp.acf.descripcion_seo,
          resp.acf.keywords_seo,
          resp.acf.image_seo
        );
      });
    this._estudiosistemaselectricos
      .getEstudioSistemasElectricos()
      .subscribe((res: any) => {
        this.loader = false;
        this.seccion_1_data = res.acf.seccion_1;
        this.seccion_iconos_data = res.acf.seccion_iconos;
        this.item_tab_data = res.acf.item_tab;
        this.texto_columna_0_data = res.acf.fondo;
        this.texto_columna_1_data = res.acf.texto_columna_1;
        this.texto_columna_2_data = res.acf.texto_columna_2;
      });
  }

  public selectPill(index: number) {
    this.activePillIndex = index;
    // do some other stuff if necessary...
  }
}
