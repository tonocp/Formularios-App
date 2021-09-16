import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  public nombreApellidoPattern: string =
    '([a-zA-Z\u00f1\u00d1]+) (.+[a-zA-Z\u00f1\u00d1]+).+$';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

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
}
