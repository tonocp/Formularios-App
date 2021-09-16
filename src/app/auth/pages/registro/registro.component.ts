import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
})
export class RegistroComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.pattern(this.vs.nombreApellidoPattern) ] ],
    email: [ '', [ Validators.required, Validators.pattern(this.vs.emailPattern) ] , [ this.mailValid ] ],
    username: [ '', [ Validators.required, this.vs.notUsuario ] ],
    password: [ '', [ Validators.required, Validators.pattern(this.vs.passPattern) ] ],
    password2: [ '', [Validators.required ] ],
  }, {
    validators: [this.vs.passwordIguales('password','password2')]
  });

  constructor(private fb: FormBuilder, private vs: ValidatorService, private mailValid: EmailValidatorService) {}

  ngOnInit(): void {
    // TEST DATA
    this.miFormulario.reset({
      nombre: 'Felipe Goikoetxea',
      email: 'test1@test.com',
      username: 'usuario'
    });
  }

  validaCampo(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  submitFormulario() {
    console.log('FORM SUBMIT');
    this.miFormulario.markAllAsTouched();
  }
}
