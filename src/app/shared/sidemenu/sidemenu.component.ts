import { Component } from '@angular/core';

interface menuItem {
  texto: string,
  ruta: string
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`
    li{
      cursor: pointer;
    }
  `]
})
export class SidemenuComponent  {

  constructor() { }

  templateMenu: menuItem[] = [
    { texto: 'Basicos',
      ruta: './template/basicos'
    },
    { texto: 'Dinamicos',
      ruta: './template/dinamicos'
    },
    { texto: 'Switches',
      ruta: './template/switches'
    },
  ];

  reactiveMenu: menuItem[] = [
    { texto: 'Basicos',
      ruta: './reactive/basicos'
    },
    { texto: 'Dinamicos',
      ruta: './reactive/dinamicos'
    },
    { texto: 'Switches',
      ruta: './reactive/switches'
    },
  ];

  authMenu: menuItem[] = [
    { texto: 'Registro',
    ruta: './auth/registro'
  },
  { texto: 'Login',
    ruta: './auth/login'
  }
];
}
