import { Component, OnInit } from '@angular/core';
import {productos} from "../../../assets/data/json";
import {Productos} from "../interfaz/productos";
import {PruebaProductosService} from "../servicios/prueba-productos/prueba-productos.service";
import {ActivatedRoute, Router} from "@angular/router";
import {VariableGlobalService} from "../servicios/variable-global/variable-global.service";
import {AlertasService} from "../servicios/alertas/alertas.service";
declare var $: any;
@Component({
  selector: 'app-slider-detalle',
  templateUrl: './slider-detalle.component.html',
  styleUrls: ['./slider-detalle.component.css']
})
export class SliderDetalleComponent implements OnInit {
  listadoProductos = productos;
  imagenDefecto = 'assets/images/detalle-productos/1.jpg';
  imagenSuperior: any;
  productoUrl: any;
  carritoAnterior = [];
  listadoProductosDetalle: Productos;
  addProductoCarrito = [];
  contadorIndices = 0;
  constructor(private  productosS: PruebaProductosService,
              private ruta: Router, private activatedRoute: ActivatedRoute,
              private variableG: VariableGlobalService,
              private alertaS: AlertasService) { }

  ngOnInit(): void {

  }

  pasarDerecha(){
    console.log(this.contadorIndices);
    this.contadorIndices++;
    let element = document.getElementById("inde-detalle_" + this.contadorIndices);
    let contenedor = document.getElementById('contenedor-principal');
    console.log(contenedor.scrollLeft , element.offsetLeft);

    contenedor.scrollTo({
      top: 0,
      left: element.offsetLeft,
      behavior: 'smooth'
    });

  }
  pasarIzquierda(){
    console.log(this.contadorIndices);
    this.contadorIndices--;
    let element = document.getElementById("inde-detalle_" + this.contadorIndices);
    let contenedor = document.getElementById('contenedor-principal');
    console.log(contenedor.scrollLeft , element.offsetLeft);


    contenedor.scrollTo({
      top: 0,
      left: element.offsetLeft,
      behavior: 'smooth'
    });


  }

  deshabilitarDerecha() {
   return this.listadoProductosDetalle && this.contadorIndices === (this.listadoProductosDetalle.length - 5)
  }
  deshabilitarIzquierda() {
    return this.contadorIndices === 0;
  }
}