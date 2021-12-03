import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {VariableGlobalService} from "../servicios/variable-global/variable-global.service";
import {AlertasService} from "../servicios/alertas/alertas.service";
import {Router} from "@angular/router";
import {PruebaProductosService} from "../servicios/prueba-productos/prueba-productos.service";

import Swal from 'sweetalert2/dist/sweetalert2.js';
import { isPlatformBrowser } from '@angular/common';


declare var $ : any; 

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carrito: any;
  aumentarDisminuir = [];
  carritoAnterior = [];
  addProductoCarrito = [];
  cantidadCarrito: number = 0;
  solicitarCotizacion: boolean;
  listadoCarrito: boolean;
  nameProducto: any;
  filtros: any;
  imagen_grande: any;
  indice: number = 0;

  constructor(
    private variableG: VariableGlobalService,
    private alertaS: AlertasService,
    private pruebaS:  PruebaProductosService,
    private ruta: Router, @Inject(PLATFORM_ID) private platformid) {
      this.filtros = {
        nombre: '',
        empresa: '',
        nit: '',
        correo: '',
        celular: '',
      }
  }

  ngOnInit(): void {

    this.llamarDatoLocales();
    this.miCarritoCompraContador();

    this.listadoCarrito = true;
    this.solicitarCotizacion = false;
    
  }


  quitarItem(data, co) {
    if(isPlatformBrowser(this.platformid)){

    this.carrito = localStorage.getItem('carrito');
    let dataCarrito = JSON.parse(this.carrito);
    let i = dataCarrito.indexOf(data);

    dataCarrito.splice(co, 1);


    localStorage.setItem('carrito', JSON.stringify(dataCarrito));
    this.llamarDatoLocales();
    let datos = 'Articulo removido del Carrito de Compras ';
    this.alertaS.showToasterWarning(datos);

    this.variableG.changeMessage();
  }
  }


  llamarDatoLocales() {
    if(isPlatformBrowser(this.platformid)){

    if(localStorage.getItem('carrito')){
      this.variableG.currentMessage.subscribe(response => {
        this.carritoAnterior = response;
        this.miCarritoCompraContador();
      });
    }
    }
  }

  miCarritoCompraContador() {

    if (this.carritoAnterior) {
      this.carritoAnterior.forEach(respuesta => {
        this.cantidadCarrito += 1;
 
      });
 
    } else {
      this.cantidadCarrito = null;
    }

  }

  cambiarUnidades(data, identificador, proceso) {
if(isPlatformBrowser(this.platformid)){
    this.aumentarDisminuir = JSON.parse(localStorage.getItem('carrito'));

    if (proceso === 1) {
      this.aumentarDisminuir[identificador]['producto_cantidad'] += 1;
    } else {

      if (this.aumentarDisminuir[identificador]['producto_cantidad'] > 1) {
        this.aumentarDisminuir[identificador]['producto_cantidad'] -= 1;
      } else {
        let datos = 'Articulo agregado a la canasta no puede ser menor a 1 unidad';
        this.alertaS.showToasterWarning(datos);
      }
    }

    localStorage.setItem('carrito', JSON.stringify(this.aumentarDisminuir));
    this.variableG.changeMessage();
  }
  }


  borrarListado() {
    if(isPlatformBrowser(this.platformid)){ 
    localStorage.setItem('carrito', JSON.stringify([]));
  }
    this.alertaS.showToasterFull('Articulos removidos exitosamente');
    this.variableG.changeMessage();
    this.llamarDatoLocales();
  }

  solicitarCotizacionCarrito() {
    $('#carrito').toggleClass('display-none');
    $('#cotizador').toggleClass('display-block');
    // this.listadoCarrito = false;
    // this.solicitarCotizacion = true;
  }

  volverCarrito() {
    $('#carrito').toggleClass('display-none');
    $('#cotizador').toggleClass('display-block');
    // this.listadoCarrito = true;
    // this.solicitarCotizacion = false;
  }


  mostrarProductos(dato) {

    if (dato === 1) {
      document.getElementById('mySidenav').style.width = '40%';
    } else {
      document.getElementById('mySidenav').style.width = '0';
    }

  }


  detalleProductos(producto, codigo) {

    this.nameProducto = producto.replace(/ /gi, '-');
    this.nameProducto = this.nameProducto.toLowerCase();

    this.nameProducto = this.nameProducto.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    this.ruta.navigate(['/detalle-productos/' + codigo + '/' + this.nameProducto])
   
  }

  enviarForm(form) {
    if(isPlatformBrowser(this.platformid)){
    const dataInfo = {
      productos: JSON.parse(localStorage.getItem('carrito')),
      filtros: this.filtros
    }
    var paqueteDeDatos = new FormData();
    paqueteDeDatos.append('productos', localStorage.getItem('carrito'));
    paqueteDeDatos.append('nombre', this.filtros.nombre);
    paqueteDeDatos.append('empresa', this.filtros.empresa);
    paqueteDeDatos.append('nit', this.filtros.nit);
    paqueteDeDatos.append('correo', this.filtros.correo);
    paqueteDeDatos.append('celular', this.filtros.celular);
  }
  

    $.ajax({
      url: 'https://gers.com.co/backend/wp-content/themes/gers/formulario-solicitar-cotizacion/form-cotizacion.php',
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

}
