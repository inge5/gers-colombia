import { Component, OnInit } from '@angular/core';
import { CapacitacionesService } from 'src/app/services/capacitaciones.service';
import { HomeService } from 'src/app/services/home.service';
import { PagesService } from 'src/app/services/pages.service';
import { PublicacionesService } from 'src/app/services/publicaciones.service';
import { VacantesService } from 'src/app/services/vacantes.service';
import { VariableGlobalService } from '../servicios/variable-global/variable-global.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  data: any[] = [];
  filtro: string = "";
  filtrobuscador: any[] = [];

  constructor(private variableG: VariableGlobalService, private _vacantesservice: VacantesService,
     private capacitaciones: CapacitacionesService, private proyectoService: HomeService, 
     private publicacionesservice:PublicacionesService, private representaciones: PagesService) { }

  ngOnInit(): void {
    this.getBusqueda();
    this.getVacantes();
    this.getCapacitaciones();
    this.getProyectos();
    this.getPublicaciones();
    this.getRepresentaciones();
    this.getServicios();
  }

  getBusqueda(){
    this.variableG.currentBusca.subscribe(resp => {
      this.filtro = resp

    });    
  }
  getVacantes() {
    this._vacantesservice.getVacantes().subscribe((res: any) => {
      res.forEach(element => {
        this.data.push({
          title: element.title.rendered,
          content: element.content.rendered,
          type: 'vacantes',
          slug: element.slug
        })  
      });
    })
  }
  getCapacitaciones(){
    this.capacitaciones.getCapacitaciones().subscribe((res: any) => {
      res.forEach(element => {
        this.data.push({
          title: element.title.rendered,
          content: element.acf.descripcion_corta,
          type: 'capacitaciones',
          slug: element.id
        })
      });
    })
  }
  getProyectos(){
    this.proyectoService.getProyects().subscribe(res => {
      res.forEach(element => {
        this.data.push({
          title: element.title.rendered,
          content: element.acf.descripcion,
          type: element.type,
          slug: element.slug
        })
      });
    })
  }
  getPublicaciones(){
    this.publicacionesservice.getPublicaciones().subscribe(res => {
      res.forEach(element => {
        this.data.push({
          title: element.title.rendered,
          content: element.acf.descripcion,
          type: element.type,
          slug: element.slug
        })
      });
    })
  }
  getRepresentaciones(){
    this.representaciones.getNeplan().subscribe(res => {
      this.data.push({
        title:res.title.rendered,
        content: res.acf.descripcion,
        type: res.type,
        slug: res.slug
      })
    })
    this.representaciones.getBeckwithElectronic().subscribe(res => {
      this.data.push({
        title: res.title.rendered,
        content: res.acf.descripcion,
        type: res.type,
        slug: res.slug
      })
    })
    this.representaciones.getXGSLab().subscribe(res => { 
      this.data.push({
        title: res.title.rendered,
        content: res.acf.descripcion,
        type: res.type,
        slug: res.slug 
      })
    })
    this.representaciones.getDranetz().subscribe(res => {
      this.data.push({
        title: res.title.rendered,
        content: res.acf.descripcion,
        type: res.type,
        slug: res.slug
      })
    })
    this.representaciones.getNdb().subscribe(res => {
      this.data.push({
        title: res.title.rendered,
        content: res.acf.descripcion,
        type: res.type,
        slug: res.slug
      })
    })
  }
  getServicios(){
    this.representaciones.getPruebasAutomatizacionControl().subscribe(res => {
      this.data.push({
        title: res.title.rendered,
        content: res.acf.seccion_1.texto_principal,
        type: 'servicios',
        slug: res.slug
      })
    })
    this.representaciones.getDisenoIngenieria().subscribe(res => {
      this.data.push({
        title: res.title.rendered,
        content: res.acf.seccion_1.texto_principal,
        type: 'servicios',
        slug: res.slug
      })
    })
    this.representaciones.getSmartGrids().subscribe(res => {
      this.data.push({
        title: res.title.rendered,
        content: res.acf.seccion_1.texto_principal,
        type: 'servicios',
        slug: res.slug
      })
    })
    this.representaciones.getEstudioSistemasElectricos().subscribe(res => {
      this.data.push({
        title: res.title.rendered,
        content: res.acf.seccion_1.texto_principal,
        type: 'servicios',
        slug: res.slug
      })
    })
    this.representaciones.getServiciosEnergeticos().subscribe(res => {
      this.data.push({
        title: res.title.rendered,
        content: res.acf.seccion_1.texto_principal,
        type: 'servicios',
        slug: res.slug
      })
    })
    this.representaciones.getInterventoriaAsesoria().subscribe(res => {
      this.data.push({
        title: res.title.rendered,
        content: res.acf.seccion_1.texto_principal,
        type: 'servicios',
        slug: res.slug
      })
    })
    this.representaciones.getPlaneacionProyectos().subscribe(res => {
      this.data.push({
        title: res.title.rendered,
        content: res.acf.seccion_1.texto_principal,
        type: 'servicios',
        slug: res.slug
      })
    })
  }
}
