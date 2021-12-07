import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Neplan } from '../../../../interfaces/neplan';
import { Cotizador } from '../../../../interfaces/cotizador';
import { environment } from 'src/environments/environment';
declare var $: any;

@Component({
  selector: 'app-form-cotizador-neplan',
  templateUrl: './form-cotizador-neplan.component.html',
  styleUrls: ['./form-cotizador-neplan.component.css']
})
export class FormCotizadorNeplanComponent implements OnInit {

  @Input() titulo: string = "";
  @Input() subTitulo: string ="";
  filtros: Cotizador;
  producto: Neplan;
  bandera: boolean = false;
  constructor() {
    this.inicializarFormularioCotizador();
    this.inicializarProductoNeplan();
    
   }

  ngOnInit(): void {
  }

  volverNeplan(){
    $('#neplan-cotizador').addClass('cerrar-formulario');
  }

  volverAtras(){
    $('#form-neplan-cotizador').addClass('cerrar-formulario');
    $('#neplan-cotizador').removeClass('cerrar-formulario');
  }

  firtsForm(){
    $('#neplan-cotizador').addClass('cerrar-formulario');
    $('#form-neplan-cotizador').removeClass('cerrar-formulario');
  }

  enviarForm(form) {
    console.log(this.producto);
    var paqueteDeDatos = new FormData();
    paqueteDeDatos.append('producto', JSON.stringify(this.producto));
    paqueteDeDatos.append('nombre', this.filtros.nombre);
    paqueteDeDatos.append('empresa', this.filtros.empresa);
    paqueteDeDatos.append('nit', this.filtros.nit);
    paqueteDeDatos.append('correo', this.filtros.correo);
    paqueteDeDatos.append('celular', this.filtros.celular);

    $.ajax({
      url: `${environment.domain}/wp-content/themes/gers/formulario-cotizador-neplan-colombia/form-cotizador-neplan-colombia.php`,
      type: 'POST',
      data: paqueteDeDatos,
      contentType: false,
      processData: false,
      cache: false, 
      success: function(data) {
          Swal.fire({
            icon: 'success',
            title: 'Gracias por regalarnos tus datos. Nos comunicaremos contigo.',
            showConfirmButton: true
          }); 
        form.reset();
      }, error: function(error){
          Swal.fire('Oops...', 'Algo pasó. Corrige los errores, por favor!', 'error')
       }
    });
   }
   inicializarFormularioCotizador(){
    this.filtros = {
      nombre: '',
      empresa: '',
      nit: '',
      correo: '',
      celular: '',
    }
   }
   inicializarProductoNeplan(){
    this.producto = {
      flujo_de_carga: false,
      simulacion_de_carga: false,
      analisis_de_cortocircuito: false,
      analisis_de_armonicos: false,
      arranque_de_motores: false,
      reduccion_de_redes: false,
      analisis_de_sistemas: false,
      estabilidad_de_voltaje: false,
      simulador_dinamico: false,
      estabilidad_de_pequena_senal: false,
      analisis_de_confiabilidad: false,
      mantenimiento_centrado_de_confianza: false,
      gestion_de_activos: false,
      gestion_estrategica_integral: false,
      gestion_de_redes_inteligentes: false,
      optimizacion_de_reguladores: false,
      proteccion_de_sobrecorriente: false,
      proteccion_de_distancia: false,
      evaluacion_de_protecciones: false,
      gestion_de_dispositivos: false,
      ubicacion_de_fallas: false,
      arco_electrico: false,
      saturacion_de_transformadores: false,
      analisis_termico_de_cables: false,
      flujo_de_carga_optimo: false,
      contingencias_N_1_y_N_2: false,
      analisis_de_capacidad_de_transferencia: false,
      suicheo_optimo: false,
      ubicacion_optima_de_capacitores: false,
      estrategia_optima_de_restauracion_de_servicio: false,
      analisis_de_inversion: false,
      refuerzo_de_alimentadores: false,
      movilidad_electronica: false,
      generacion_distribuida: false,
      optimizacion_de_infraestructura: false,
      cumplimiento_del_codigo_de_redes: false
    }
   }
}
