import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{

  miFormulario: FormGroup = this.fb.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ true, Validators.required ],
    terminos: [ false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: false
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      terminos: false
    });

    //this.miFormulario.valueChanges.subscribe( newForm => {
    //  delete newForm.terminos;
    //  this.persona = newForm;
    //})
    
    this.miFormulario.valueChanges.subscribe( ({ terminos, ...restoDeLosArgumentos}) => {
      this.persona = restoDeLosArgumentos;
    })
  }

  guardar() {
    if(this.miFormulario.invalid) {return;}

    const formValue = { ...this.miFormulario.value };
    delete formValue.terminos;
    this.persona = formValue;

    console.log(this.persona);

  }

}
