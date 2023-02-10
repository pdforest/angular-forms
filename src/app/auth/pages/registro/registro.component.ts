import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
//import { nombreApellidoPattern, emailPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], 
                [this.emailValidator]],
    username: ['',[Validators.required, this.vs.noPuedeSerStrider]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    password2: ['',[Validators.required]]
  },{
    validators: [this.vs.camposiguales('password', 'password2')]
  });

  get emailErrorMsg(): string {

    const errors = this.miFormulario.get('email')?.errors;

    if( errors?.['required']){
      return 'El email es requerido';
    } else if(errors?.['pattern']){
      return 'El email no tiene un formato valido';
    } else if(errors?.['emailTomado']){
      return 'El email ya ha sido tomado';
    }

    return '';

  }

  constructor(private fb: FormBuilder,
              private vs: ValidatorService,
              private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Pepe Argento',
      email: 'pepe@argento.com',
      username: 'pepe',
      password: '123456',
      password2: '123456'
    })
  }

  campoNoValido(campo: string){
    //return this.miFormulario.controls[campo]?.invalid
    return this.miFormulario.get(campo)?.invalid
        && this.miFormulario.get(campo)?.touched;
  }

  guardar(){
    // disparar las validaciones en cada uno de los campos
    this.miFormulario.markAllAsTouched();
    
    if(this.miFormulario.invalid){return};
    
    console.log(this.miFormulario.value);
  }

}
