import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { RouterModule } from '@angular/router';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { AppRoutingModule } from './app-routing.module';

// Services Colombia
import { HomeService } from './services/home.service';
import { MenusService } from './services/menus.service';
import { PagesService } from './services/pages.service';
import { VacantesService } from './services/vacantes.service';
import { PublicacionesService } from './services/publicaciones.service';


import { AppComponent } from './app.component';
import { TopbarAzulComponent } from './colombia/topbar-azul/topbar-azul.component';
import { MenuPrincipalComponent } from './colombia/menu-principal/menu-principal.component';
import { MenuVerticalComponent } from './colombia/menu-vertical/menu-vertical.component';
import { FooterComponent } from './colombia/footer/footer.component';

import { HomeComponent, SafeHtmlPipe } from './colombia/home/home.component';
import { ColombiaComponent } from './colombia/colombia.component';
import { NeplanComponent } from './colombia/representaciones/neplan/neplan.component';
import { BeckwithElectronicComponent } from './colombia/representaciones/beckwith-electronic/beckwith-electronic.component';
import { XgslabComponent } from './colombia/representaciones/xgslab/xgslab.component';
import { DranetzComponent } from './colombia/representaciones/dranetz/dranetz.component';
import { NdbComponent } from './colombia/representaciones/ndb/ndb.component';
import { ProyectosComponent } from './colombia/proyectos/proyectos.component';
import { PruebasAutomatizacionControlComponent } from './colombia/servicios/pruebas-automatizacion-control/pruebas-automatizacion-control.component';
import { DetalleProductoComponent } from './colombia/productos/detalle-producto/detalle-producto.component';
import { ProductoComponent } from './colombia/productos/producto/producto.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { CarritoComponent } from './colombia/carrito/carrito.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderDetalleComponent } from './colombia/slider-detalle/slider-detalle.component';
import { AngularPaginatorModule } from 'angular-paginator';
import { DisenoIngenieriaComponent } from './colombia/servicios/diseno-ingenieria/diseno-ingenieria.component';
import { SmartGridsComponent } from './colombia/servicios/smart-grids/smart-grids.component';
import { EstudiosSistemasComponent } from './colombia/servicios/estudios-sistemas/estudios-sistemas.component';
import { ServiciosEnergeticosComponent } from './colombia/servicios/servicios-energeticos/servicios-energeticos.component';
import { InterventoriasAsesoriasComponent } from './colombia/servicios/interventorias-asesorias/interventorias-asesorias.component';
import { PlaneacionProyectosComponent } from './colombia/servicios/planeacion-proyectos/planeacion-proyectos.component';
import { ContactenosComponent } from './colombia/contactenos/contactenos.component';
import { PensamientoCorporativoComponent } from './colombia/nosotros/pensamiento-corporativo/pensamiento-corporativo.component';
import { PoliticaGestionIntegralComponent } from './colombia/nosotros/politica-gestion-integral/politica-gestion-integral.component';
import { AcuerdosInternacionalesComponent } from './colombia/acuerdos-internacionales/acuerdos-internacionales.component';
import { TrabajeConNosotrosComponent } from './colombia/trabaje-con-nosotros/trabaje-con-nosotros.component';
import { EnviarCurriculumComponent } from './colombia/enviar-curriculum/enviar-curriculum.component';
import { VacanteInternaComponent } from './colombia/vacante-interna/vacante-interna.component';
import { PublicacionesComponent } from './colombia/publicaciones/publicaciones.component';
import { PublicacionInternaComponent } from './colombia/publicaciones/publicacion-interna/publicacion-interna.component';


import { OwlModule } from 'ngx-owl-carousel';
import {NgxPaginationModule} from 'ngx-pagination';
import { CapacitacionComponent } from './colombia/capacitacion/capacitacion.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins

import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';// a plugin!
import listPlugin from '@fullcalendar/list';
import { CharPipe } from './pipes/char.pipe';
import { InternaCapacitacionComponent } from './colombia/interna-capacitacion/interna-capacitacion.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin,
  listPlugin
]);
import es from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
import { BuscadorComponent } from './colombia/buscador/buscador.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormDemostracionComponent } from './colombia/productos/form-demostracion/form-demostracion.component';
import { FormCotizadorNeplanComponent } from './colombia/representaciones/neplan/form-cotizador-neplan/form-cotizador-neplan.component';
import { GossenMetrawattComponent } from './colombia/representaciones/gossen-metrawatt/gossen-metrawatt.component';
import { LineaEticaComponent } from './colombia/linea-etica/linea-etica.component';
registerLocaleData(es);

@NgModule({
  declarations: [
    CapacitacionComponent,
    InternaCapacitacionComponent,
    AppComponent,
    SafeHtmlPipe,
    TopbarAzulComponent,
    MenuPrincipalComponent,
    MenuVerticalComponent,
    FooterComponent,
    NeplanComponent,
    HomeComponent,
    ColombiaComponent,
    BeckwithElectronicComponent,
    XgslabComponent,
    DranetzComponent,
    NdbComponent,
    ProyectosComponent,
    PruebasAutomatizacionControlComponent,
    DetalleProductoComponent,
    ProductoComponent,
    CarritoComponent,
    SliderDetalleComponent,
    DisenoIngenieriaComponent,
    SmartGridsComponent,
    EstudiosSistemasComponent,
    ServiciosEnergeticosComponent,
    InterventoriasAsesoriasComponent,
    PlaneacionProyectosComponent,
    ContactenosComponent,
    PensamientoCorporativoComponent,
    PoliticaGestionIntegralComponent,
    AcuerdosInternacionalesComponent,
    TrabajeConNosotrosComponent,
    EnviarCurriculumComponent,
    VacanteInternaComponent,
    PublicacionesComponent,
    PublicacionInternaComponent,
    CapacitacionComponent,
    CharPipe,
    InternaCapacitacionComponent,
    CharPipe,
    BuscadorComponent,
    FilterPipe,
    FormDemostracionComponent,
    FormCotizadorNeplanComponent,
    GossenMetrawattComponent,
    LineaEticaComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    IvyCarouselModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    AngularPaginatorModule,
    NgxSkeletonLoaderModule.forRoot(),
    AppRoutingModule,
    OwlModule,
    NgxPaginationModule,
    FullCalendarModule,
  ],
  exports: [RouterModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    //COLOMBIA
    HomeService,
    MenusService,
    PagesService,
    VacantesService,
    PublicacionesService,   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
