import { Component, OnInit } from '@angular/core';
import { VariableGlobalService } from "../servicios/variable-global/variable-global.service";
import { AlertasService } from "../servicios/alertas/alertas.service";
import { MenusService } from '../../services/menus.service';
import { PruebaProductosService } from '../servicios/prueba-productos/prueba-productos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  carrito: any;
  carritoAnterior: any;
  cantidadCarrito: number = 0;
  categorias: any[] = [];
  categoriasTemp: any[] = [];
  subCategorias: any[] = [];
  subCategoriasTemp: any[] = [];
  menuPrincipal_data: any[] = [];
  busqueda: string = "";
  subsubCategoriasTemp: any[] = [];
  
  constructor(private variableG: VariableGlobalService, private alertaS: AlertasService, private _menusService: MenusService,
    private productoS: PruebaProductosService, private ruta: Router) { 
    }
    

  ngOnInit(): void {
    this.llamarDatoLocales();
    this.getMenuPrincipal();
    this.getCategorias();
  }

  getCategorias(){
    this.productoS.getCategoriesWP().then(resp => {

      for (const r of resp.data) {
        if (r.count > 0 && r.parent === 0) {
          this.categoriasTemp.push(r);
        }
        if (r.parent > 0) {
          this.subCategoriasTemp.push(r);
        }
      }
  
        this.subCategoriasTemp.forEach((element2, index) => {
          for (const r of resp.data) {
            if(element2.id === r.parent){
              this.subsubCategoriasTemp.push({
                ...r,
                bandera: false
              })
            }
          }
            element2.subsubCategorias = this.subsubCategoriasTemp;
            this.subsubCategoriasTemp = [];
      })
      
      this.categoriasTemp.forEach(element1 => {
        this.subCategoriasTemp.forEach((element2, index) => {
          if (element1.id === element2.parent) {
       
            this.subCategorias.push(element2)
          }
          if(this.subCategoriasTemp.length === (index+1)){
            this.categorias.push({
              ...element1,
              subCategorias: this.subCategorias
            })
            this.subCategorias = [];
          }
        })
      })
      // console.log(this.categorias);
      this.productoS.setCategoria(this.categorias);
    })
  }

  buscar(){
    this.variableG.setBuscador(this.busqueda);
    this.ruta.navigateByUrl('/buscador');
  }

  productosCategoria(categoria: number) {
    
    if(categoria > 0){
      this.variableG.setCategoria(categoria);
      Swal.fire('Cargando Productos','Espere un momento','info');
      Swal.showLoading();
    }
    setTimeout(() => {
      $('.subCategorias').removeClass("abrir-subCategorias")
      this.ruta.navigateByUrl('/productos');  
    }, 1500);
    
  }

  abrirBuscador(){
    $('.buscador').toggleClass('abrir-buscador');
    $('.no-ancho').toggleClass('ancho')
    $('#buscar').toggleClass('lupa-detalle')
  }

  abrirMenu(){
    $('#productos').addClass('abrir');
    $('#contenedor_productos').addClass('abrir');
  }

  desplegarSubCategorias(id: number){
    // $('.representacionItem').click(this.abrirMenu());
    
    let subCategorias = $('.subCategorias').hasClass('abrir-subCategorias');
    let subsubCategorias = $('.subCategorias').hasClass('abrir-subsubCategorias');
    let cateSeleccionado = $('.categorias').hasClass('seleccionado');
    if(cateSeleccionado){
      $('.categorias').removeClass('seleccionado');
    }
    $(`.cate${id}`).addClass('seleccionado');
    if(subCategorias){
      $('.subCategorias').removeClass("abrir-subCategorias")
    }
    $(`.pp${id}`).addClass("abrir-subCategorias")
    // if(subsubCategorias){
    //   $('.subCategorias').removeClass('abrir-subsubCategorias');
    // }
    // $(`.subsubCategoria${id}`).addClass('abrir-subsubCategorias');
  }

  getMenuPrincipal() {
    this._menusService.getMenuPrincipal()
      .subscribe((res: any) => {
        this.menuPrincipal_data = res.items;
      });
  }

  llamarDatoLocales() {

    this.variableG.currentMessage.subscribe(response => {
      this.carritoAnterior = response;
 
      this.miCarritoCompraContador();
    });

  }

  miCarritoCompraContador() {
    if (this.carritoAnterior) {
      this.cantidadCarrito = this.carritoAnterior.length;
    }



  }


  mostrarProductos(dato) {

    if (dato === 1) {
      $('#mySidenav').addClass('open');
    } else {
      $('#mySidenav').removeClass('open');
    }

    // if (dato === 1) {
    //   document.getElementById('mySidenav').style.width = '40%';
    // } else {
    //   document.getElementById('mySidenav').style.width = '0';
    // }

  }

}
