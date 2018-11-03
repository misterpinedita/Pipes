import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = 'Fernando';
  nombre2 = 'fErnNadO gaRCiA vAllEcaNo';
  arreglo: number[] = [0 , 1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    dirrecion: {
      calle: 'Primera',
      case: '19'
    }
  };

  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Llego la data!'), 3500);
  });

  fecha = new Date();

  video = 'YPClJee1HZY';

  arrayObjetos = [{
    activo: true,
    nombre: 'Mar',
    total: 1
  },
  {
    activo: false,
    nombre: 'Sol',
    total: 5
  }];

  activar = true;
}
