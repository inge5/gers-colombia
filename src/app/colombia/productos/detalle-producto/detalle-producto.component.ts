import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import {productos} from "../../../../assets/data/json";
import {PruebaProductosService} from "../../servicios/prueba-productos/prueba-productos.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertasService} from "../../servicios/alertas/alertas.service";
import {Productos} from "../../interfaz/productos";
import {VariableGlobalService} from "../../servicios/variable-global/variable-global.service";
import { isPlatformBrowser } from '@angular/common';
declare var $: any;
@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  imagenDefecto = 'assets/images/logo-gers-trasparente.png';
  imagenSuperior: any;
  productoUrl: any;
  carritoAnterior = [];
  listadoProductosDetalle: any;
  addProductoCarrito = [];
  imagen_grande: any;
  carritoTemporal = [];
  bandera: boolean;
  idProducto: number;

  constructor(private  productosS: PruebaProductosService,
              private ruta: Router, private activatedRoute: ActivatedRoute,
              private variableG: VariableGlobalService,
              private alertaS: AlertasService, @Inject(PLATFORM_ID) private platformid) {
                this.activatedRoute.params.subscribe(resp => {
            
                  this.productoUrl = resp.codigo;   
                  if (this.productoUrl) {
                    this.listarDetalleProductos(this.productoUrl);
                }
                })
              

              

  }
  ngOnInit(): void {
  }

  abrirDemostracion(){
    $('#demostracion').removeClass('cerrar-formulario');
  }

  pasarImagen(imagen :string) {
    this.imagen_grande = imagen;
  }

  listarDetalleProductos(codigo: number) {

    this.idProducto = codigo;

    this.productosS.getlistarProductoUnicoWP(codigo).then(respuesta => {
     
      this.listadoProductosDetalle = respuesta.data;
   
      this.imagen_grande = this.listadoProductosDetalle['images'][0].src;
    }).catch(error => {
      
    })

  }

  agregarCarrito(id: number) {
if(isPlatformBrowser(this.platformid)){
    if(localStorage.getItem('carrito')){
      this.carritoTemporal = JSON.parse(localStorage.getItem('carrito'));

      if(this.carritoTemporal.length > 0){
        this.carritoTemporal.forEach(element => {
          if(id === element.id){
         
            element.producto_cantidad += 1;
            this.bandera = true;
          }else{
            if(!this.bandera){
         
              this.listadoProductosDetalle['producto_cantidad'] = 1;
              this.bandera = false;
            }
          }
        })
        if(!this.bandera){
          this.carritoTemporal.push(this.listadoProductosDetalle);
        }
        this.bandera = false;
      }else{
        this.listadoProductosDetalle['producto_cantidad'] = 1;
        this.carritoTemporal.push(this.listadoProductosDetalle);
      }
      localStorage.setItem('carrito', JSON.stringify(this.carritoTemporal));
      const data = 'Articulo Agregado Correctamente al Carrito';
      this.alertaS.showToasterFull(data);
  
    }else{
      this.listadoProductosDetalle['producto_cantidad'] = 1;
      this.carritoTemporal.push(this.listadoProductosDetalle);
      localStorage.setItem('carrito', JSON.stringify(this.carritoTemporal));
      const data = 'Articulo Agregado Correctamente al Carrito';
      this.alertaS.showToasterFull(data);
   
    }
    this.variableG.changeMessage();
  }
  }
}
