import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor( ) { }

  public pages: any[] = [
    {
      id: 1,
      name: 'Paso 1',
      path: './assets/imagenes/Paso1.PNG'
    },
    {
      id: 2,
      name: 'Paso 2',
      path: './assets/imagenes/Paso2.PNG'
    },
    {
      id: 3,
      name: 'Paso 3',
      path: './assets/imagenes/Paso3.PNG'
    },
    {
      id: 4,
      name: 'Paso 4',
      path: './assets/imagenes/Paso4.jpeg'
    },
    {
      id: 5,
      name: 'Paso 5',
      path: './assets/imagenes/Paso5.PNG'
    },
    {
      id: 6,
      name: 'Paso 6',
      path: './assets/imagenes/Paso6.PNG'
    },
    {
      id: 7,
      name: 'Paso 7',
      path: './assets/imagenes/Paso7.PNG'
    }
  ];

  public clientes: any[] = [
    {
      nombres: 'Sergio Contreras',
      token:   '3152511320'
    },
    {
      nombres: 'Luis Cortes',
      token:   '3103915810'
    },
    {
      nombres: 'Sandra Aponte',
      token:   '3227966579'
    },
    {
      nombres: 'Daniel Carvajal',
      token:   '3153161304'
    },
    {
      nombres: 'Camilo Mesa',
      token:   '3173646599'
    },
    {
      nombres: 'Yaneth Ruiz',
      token:   '3187230973'
    },
    {
      nombres: 'Cliente BanBogotá',
      token:   '1234567890'
    },
  ]

  getListPages(){
    return this.pages;
  }

  getPage( idPage: number){
    const page =  this.pages.find(x => x.id === idPage );
    return page;
  }
  getCliente( token: number){
    const nombre =  this.clientes.find(x => x.token === token );
    return nombre;
  }
}
