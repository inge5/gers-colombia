import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';
import { PagesService } from '../../../services/pages.service';

@Component({
  selector: 'app-planeacion-proyectos',
  templateUrl: './planeacion-proyectos.component.html',
  styleUrls: ['./planeacion-proyectos.component.css'],
})
export class PlaneacionProyectosComponent implements OnInit {
  loader = true;
  seccion_1_data: any = {};
  seccion_iconos_data: any[] = [];

  constructor(
    private _planeacionproyectos: PagesService,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this._planeacionproyectos
      .getPlaneacionProyectosSeo()
      .subscribe((resp: any) => {
        this.seo.paginaMetaData(
          resp.acf.titulo_seo,
          resp.acf.descripcion_seo,
          resp.acf.keywords_seo,
          resp.acf.image_seo
        );
      });
    this._planeacionproyectos.getPlaneacionProyectos().subscribe((res: any) => {
      this.loader = false;
      this.seccion_1_data = res.acf.seccion_1;
      this.seccion_iconos_data = res.acf.seccion_iconos;
    });
  }
}
