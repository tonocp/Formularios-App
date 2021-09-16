import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
})
export class RegistroComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: [
      '',
      [Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)],
    ],
    email: [
      '',
      [Validators.required, Validators.pattern(this.vs.emailPattern)],
    ],
    username: ['', [Validators.required, this.vs.notUsuario]],
  });

  constructor(private fb: FormBuilder, private vs: ValidatorService) {}

  ngOnInit(): void {
    // TEST DATA
    this.miFormulario.reset({
      nombre: 'Felipe Goikoetxea',
      email: 'email@email.com',
    });
  }

  validaCampo(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }
}
