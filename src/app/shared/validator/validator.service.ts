import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  FormGroup,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  // REGEX Pattern for Name and Surname included Ñ and ñ
  public nombreApellidoPattern: string =
    '([a-zA-Z\u00f1\u00d1]+) (.+[a-zA-Z\u00f1\u00d1]+).+$';
  // REGEX Pattern for Email Validation
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  // REGEX Pattern for Password 8 charcaters min, at least 1 Uppercase, 1 number and 1 special char
  public passPattern: string =
    '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';

  constructor() {}

  notUsuario(control: FormControl): ValidationErrors | null {
    const valor: string = control.value?.trim().toLowerCase();
    if (valor === 'usuario') {
      return {
        notUsuario: true,
      };
    }
    return null;
  }

  passwordIguales(pass1: string, pass2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get(pass1)?.value;
      const confirm = formGroup.get(pass2)?.value;
      if (password !== confirm) {
        formGroup.get(pass2)?.setErrors({ noIguales: true });
        return { noIguales: true };
      }
      formGroup.get(pass2)?.setErrors(null);
      return null;
    };
  }
}
