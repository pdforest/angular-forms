import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
//import { nombreApellidoPattern, emailPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)]],
    username: ['',[Validators.required, this.vs.noPuedeSerStrider]],
    password: [''],
    password2: ['']
  });

  constructor(private fb: FormBuilder,
              private vs: ValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Pepe Argento',
      email: 'pepe@argento.com',
      username: 'pepe'
    })
  }

  campoNoValido(campo: string){
    //return this.miFormulario.controls[campo]?.invalid
    return this.miFormulario.get(campo)?.invalid
        && this.miFormulario.get(campo)?.touched;
  }

  guardar(){
    // disoarar las validaciones en cada uno de los campos
    this.miFormulario.markAllAsTouched();
    
    if(this.miFormulario.invalid){return};
    
    console.log(this.miFormulario.value);
  }

}
