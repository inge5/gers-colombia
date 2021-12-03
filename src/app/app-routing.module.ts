import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColombiaComponent } from './colombia/colombia.component';
import { HomeComponent } from './colombia/home/home.component';
import { NeplanComponent } from './colombia/representaciones/neplan/neplan.component';
import { BeckwithElectronicComponent } from './colombia/representaciones/beckwith-electronic/beckwith-electronic.component';
import { XgslabComponent } from './colombia/representaciones/xgslab/xgslab.component';
import { DranetzComponent } from './colombia/representaciones/dranetz/dranetz.component';
import { NdbComponent } from './colombia/representaciones/ndb/ndb.component';
import { ProyectosComponent } from './colombia/proyectos/proyectos.component';
import { PruebasAutomatizacionControlComponent } from './colombia/servicios/pruebas-automatizacion-control/pruebas-automatizacion-control.component';
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
import { VacanteInternaComponent } from './colombia/vacante-interna/vacante-interna.component';
import { PublicacionesComponent } from './colombia/publicaciones/publicaciones.component';
import { PublicacionInternaComponent } from './colombia/publicaciones/publicacion-interna/publicacion-interna.component';
import { DetalleProductoComponent } from "./colombia/productos/detalle-producto/detalle-producto.component";
import { ProductoComponent } from "./colombia/productos/producto/producto.component";
import { CapacitacionComponent } from './colombia/capacitacion/capacitacion.component';
import { InternaCapacitacionComponent } from './colombia/interna-capacitacion/interna-capacitacion.component';
import { BuscadorComponent } from './colombia/buscador/buscador.component';
import { GossenMetrawattComponent } from './colombia/representaciones/gossen-metrawatt/gossen-metrawatt.component';


let APP_ROUTES: Routes = [];

    APP_ROUTES = [
        {
            path: '', component: ColombiaComponent,
            children: [
                { path: '', component: HomeComponent },
                { path: 'neplan', component: NeplanComponent },
                { path: 'beckwith-electric', component: BeckwithElectronicComponent },
                { path: 'xgslab', component: XgslabComponent },
                { path: 'dranetz', component: DranetzComponent },
                { path: 'ndb', component: NdbComponent },
                { path: 'capacitaciones', component: CapacitacionComponent },
                { path: 'capacitaciones/:id', component: InternaCapacitacionComponent },
                { path: 'proyectos', component: ProyectosComponent },
                { path: 'productos', component: ProductoComponent },
                { path: 'detalle-productos/:codigo/:nombre', component: DetalleProductoComponent },
                { path: 'estudios-de-sistemas-electricos', component: EstudiosSistemasComponent },
                { path: 'smart-grids', component: SmartGridsComponent },
                { path: 'diseno-e-ingenieria', component: DisenoIngenieriaComponent },
                { path: 'servicios-energeticos', component: ServiciosEnergeticosComponent },
                { path: 'interventoria-y-asesoria', component: InterventoriasAsesoriasComponent },
                { path: 'planeacion-de-proyectos', component: PlaneacionProyectosComponent },
                { path: 'contactenos', component: ContactenosComponent },
                { path: 'pensamiento-corporativo', component: PensamientoCorporativoComponent },
                { path: 'politica-gestion-integral', component: PoliticaGestionIntegralComponent },
                { path: 'acuerdos-internacionales', component: AcuerdosInternacionalesComponent },
                { path: 'trabaje-con-nosotros', component: TrabajeConNosotrosComponent },
                { path: 'vacante-interna', component: VacanteInternaComponent },
                { path: 'vacantes/:slug', component: VacanteInternaComponent },
                { path: 'publicaciones', component: PublicacionesComponent },
                { path: 'publicaciones/:slug', component: PublicacionInternaComponent },
                { path: 'pruebas-automatizacion-y-control', component: PruebasAutomatizacionControlComponent },
                { path: 'buscador', component: BuscadorComponent },
                { path: 'gossen-metrawatt', component: GossenMetrawattComponent },
                { path: '**', redirectTo: '', pathMatch: 'full' }
            ]
        },
    ]

 


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(APP_ROUTES, {
            useHash: true,
            onSameUrlNavigation: "ignore",
            anchorScrolling: 'enabled',
            scrollPositionRestoration: 'enabled',
            initialNavigation: 'enabled'})
    ],
    exports: []

})

export class AppRoutingModule{ }

// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {
//     useHash: true,
//     onSameUrlNavigation: "ignore",
//     anchorScrolling: 'enabled',
//     scrollPositionRestoration: 'enabled',
//     initialNavigation: 'enabled'
// });
