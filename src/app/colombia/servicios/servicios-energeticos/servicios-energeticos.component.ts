import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';
import { PagesService } from '../../../services/pages.service';

@Component({
  selector: 'app-servicios-energeticos',
  templateUrl: './servicios-energeticos.component.html',
  styleUrls: ['./servicios-energeticos.component.css']
})
export class ServiciosEnergeticosComponent implements OnInit {
  loader = true;
  seccion_1_data: any = {};
  seccion_iconos_data: any[] = [];
  texto_final_data: any = {};

  constructor(private _serviciosenergeticos:PagesService, private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.paginaServiciosEnergeticos();
    this._serviciosenergeticos.getServiciosEnergeticos()
      .subscribe((res:any) => {
        this.loader = false;
        this.seccion_1_data = res.acf.seccion_1;
        this.seccion_iconos_data = res.acf.seccion_iconos;
        this.texto_final_data = res.acf.texto_final;
      });
  }

}
