import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { HomeService } from '../../services/home.service';
import { PagesService } from '../../services/pages.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  FeaturedProyects: any[] = [];
  titulo_pagina_data: any;

  loader = true;

  constructor(
    private _proyectosService: HomeService,
    private _proyectosPageService: PagesService,
    private seo: SeoService,
    @Inject(PLATFORM_ID) private platformid,
    private titulo: Title
  ) {}

  ngOnInit(): void {
    this._proyectosPageService.getProyectosSeo().subscribe((resp: any) => {
      this.seo.paginaMetaData(
        resp.acf.titulo_seo,
        resp.acf.descripcion_seo,
        resp.acf.keywords_seo,
        resp.acf.image_seo
      );
    });
    if (isPlatformBrowser(this.platformid)) {
      this._proyectosService.getProyects().subscribe((res: any) => {
        this.loader = false;
        this.FeaturedProyects = res;
      });
      this._proyectosPageService.getProyectosPage().subscribe((res: any) => {
        this.loader = false;
        this.titulo_pagina_data = res.acf.titulo_pagina;
      });
    }
  }
}
