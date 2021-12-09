import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PruebaProductosService } from '../../servicios/prueba-productos/prueba-productos.service';
import Swal from 'sweetalert2';
import { PagesService } from 'src/app/services/pages.service';
import { environment } from 'src/environments/environment';
declare var $: any;

@Component({
  selector: 'app-form-demostracion',
  templateUrl: './form-demostracion.component.html',
  styleUrls: ['./form-demostracion.component.css']
})
export class FormDemostracionComponent implements OnInit {

  @Input() producto: any;
  @Input() tipoProducto: any;
  nombreProducto
  formDemostracion: FormGroup;
  urlDestino: string = `${environment.domain}/wp-content/themes/gers/formulario-demostracion/form-demostracion.php`;

  constructor(private fb: FormBuilder, private productoS: PruebaProductosService, private _neplan:PagesService) { }

  ngOnInit(): void {
    this.crearFormulario();
    if(this.tipoProducto === 'Productos'){
      this.traerProducto();
    }else{
      this.traerNeplan();
    }
  }

  traerProducto(){
    this.productoS.getlistarProductoUnicoWP(this.producto).then(resp => {

      this.nombreProducto = resp.data.name;
      this.formDemostracion.controls['tipo_producto'].setValue(this.nombreProducto)
    })
  }

  traerNeplan(){
    this._neplan.getNeplan().subscribe(resp => {
      this.formDemostracion.controls['tipo_producto'].setValue(resp.title.rendered);
    })
  }

  get validEmpresa(){
    return this.formDemostracion.get('empresa').invalid && this.formDemostracion.get('empresa').touched;
  }

  get validNit(){
    return this.formDemostracion.get('nit').invalid && this.formDemostracion.get('nit').touched;
  }

  get validFullName(){
    return this.formDemostracion.get('fullname').invalid && this.formDemostracion.get('fullname').touched;
  }
  
  get validCargo(){
    return this.formDemostracion.get('cargo').invalid && this.formDemostracion.get('cargo').touched;
  }

  get validEmail(){
    return this.formDemostracion.get('email').invalid && this.formDemostracion.get('email').touched;
  }

  get validTelefono(){
    return this.formDemostracion.get('telefono').invalid && this.formDemostracion.get('telefono').touched;
  }

  get validDescripcion(){
    return this.formDemostracion.get('descripcion').invalid && this.formDemostracion.get('descripcion').touched;
  }

  get validAcepto(){
    return this.formDemostracion.get('acepto').invalid && this.formDemostracion.get('acepto').touched && !this.formDemostracion.get('acepto').value;
  }

  get validTipoProducto(){
    return this.formDemostracion.get('tipo_producto').invalid && this.formDemostracion.get('tipo_producto').touched;
  }

  get validFechaPropuesta(){
    return this.formDemostracion.get('fecha_propuesta').invalid && this.formDemostracion.get('fecha_propuesta').touched;
  }

  crearFormulario(){
    this.formDemostracion = this.fb.group({
      empresa : ['',Validators.required],
      nit: ['', Validators.required],
      fullname: ['', Validators.required],
      cargo: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      descripcion: ['', Validators.required],
      acepto: ['', Validators.required],
      tipo_producto: ['', Validators.required],
      fecha_propuesta: ['', Validators.required]
    })
  }

  volverLista(){
    $('#demostracion').addClass('cerrar-formulario');
  }
  enviarFormulario(){
    if(this.formDemostracion.invalid && !this.formDemostracion.get('acepto').value){
      return Object.values( this.formDemostracion.controls ).forEach(control => {
        control.markAsTouched();
      });
    }

    if(this.formDemostracion.invalid){
      return Object.values( this.formDemostracion.controls ).forEach(control => {
        control.markAsTouched();
      });
    }

    if(!this.formDemostracion.get('acepto').value){
      alert('Debes aceptar Terminos y condiciones');
      return;
    }
    let formData = new FormData();
    formData.append('empresa', this.formDemostracion.get('empresa').value);
    formData.append('nit', this.formDemostracion.get('nit').value);
    formData.append('fullname', this.formDemostracion.get('fullname').value);
    formData.append('cargo', this.formDemostracion.get('cargo').value);
    formData.append('email', this.formDemostracion.get('email').value);
    formData.append('telefono', this.formDemostracion.get('telefono').value);
    formData.append('descripcion', this.formDemostracion.get('descripcion').value);
    formData.append('acepto', this.formDemostracion.get('acepto').value);
    formData.append('tipo_producto', this.formDemostracion.get('tipo_producto').value);
    formData.append('fecha_propuesta', this.formDemostracion.get('fecha_propuesta').value);


    
    $.ajax({
      url: this.urlDestino,
      type: 'POST',
      /*
      data: JSON.stringify(this.usuario),
      dataType:"json",
      */
      contentType: false,
      data: formData, // Al atributo data se le asigna el objeto FormData.
      processData: false,
      cache: false, 
      success: function(data) {
        Swal.fire({
          icon: 'success',
          title: 'Gracias por regalarnos tus datos. Nos comunicaremos contigo.',
          showConfirmButton: true
        });
  
      }, error: function(error){
        Swal.fire('Oops...', 'Algo pasó. Corrige los errores, por favor!', 'error')
      }
    });
    this.formDemostracion.reset();
    if(this.tipoProducto === 'Productos'){
      this.traerProducto();
    }else{
      this.traerNeplan();
    }
  }

}
