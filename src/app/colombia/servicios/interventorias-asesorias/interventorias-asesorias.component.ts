import { PagesService } from '../../../services/pages.service';
import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-interventorias-asesorias',
  templateUrl: './interventorias-asesorias.component.html',
  styleUrls: ['./interventorias-asesorias.component.css']
})
export class InterventoriasAsesoriasComponent implements OnInit {
  loader = true;
  seccion_1_data: any = {};
  seccion_iconos_data: any[] = [];

  constructor(private interventoriasasesorias:PagesService, private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.paginaInterventoria();
    this.interventoriasasesorias.getInterventoriaAsesoria()
      .subscribe((res:any) => {
        this.loader = false;
        this.seccion_1_data = res.acf.seccion_1;
        this.seccion_iconos_data = res.acf.seccion_iconos;
      });
  }

}
