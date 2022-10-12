import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;
  
  constructor() { }

  ngOnInit(): void {
  }

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Pablo',
    favoritos: [
      { id: 1, nombre: 'Tejo'},
      { id: 2, nombre: 'Pool'}
    ]
  }

  nombreInvalido(): boolean {
    return (  this.miFormulario?.controls['nombre']?.invalid
           && this.miFormulario?.controls['nombre']?.touched
    );
  }

  guardar() {
    console.log(this.miFormulario);
    console.log('Formulario guardado');
  }

  eliminar(i: number) {
    this.persona.favoritos.splice(i, 1);
  }

  agregar(){

    if(this.nuevoJuego == '') {
      return;
    }

    let last:any = this.persona.favoritos[this.persona.favoritos.length - 1];
    (last == undefined) ? last = 1 : last = last.id + 1; 

    const nuevoFavorito: Favorito = {
      id: last,
      nombre: this.nuevoJuego
    }
    
    this.persona.favoritos.push( {...nuevoFavorito});
    this.nuevoJuego = '';
  }

  nada(){}

}
