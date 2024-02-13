import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2/dist/sweetalert2.js';

declare var $: any;

@Component({
  selector: 'app-linea-etica',
  templateUrl: './linea-etica.component.html',
  styleUrls: ['./linea-etica.component.css'],
})
export class LineaEticaComponent implements OnInit {
  formulario: FormGroup;
  constructor(private fb: FormBuilder) {
    this.crearForm();
  }

  ngOnInit(): void {}

  crearForm() {
    this.formulario = this.fb.group({
      rol: ['Colaborador', [Validators.required]],
      lugar: ['Colombia', [Validators.required]],
      denuncia: ['', [Validators.required]],
      acepto: [false, [Validators.requiredTrue]],
    });
  }

  enviarForm() {
    if (this.formulario.invalid) return;
    $.ajax({
      url: `${environment.domain}/wp-content/themes/gers/formulario-linea-etica/form-linea-etica.php`,
      type: 'POST',
      data: JSON.stringify(this.formulario.value),
      dataType: 'json',
      success: function (data) {},
      error: function (error) {
        if (error.status === 200) {
          Swal.fire({
            icon: 'success',
            title:
              'Gracias por regalarnos tus datos. Nos comunicaremos contigo.',
            showConfirmButton: true,
          });
        } else {
          Swal.fire(
            'Oops...',
            'Algo pasó. Corrige los errores, por favor!',
            'error'
          );
        }
      },
    });
  }
}
