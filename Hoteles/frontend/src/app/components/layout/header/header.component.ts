import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  opc: MenuItem[] = [];
  estilosMenu: {}= {
    'background-color': '#8DC3D8',
    'border': '0',


  }
  constructor() { }

  ngOnInit(): void {

    this.opc = [
      {
        label: 'Hoteles',
        // items: [
        //   {
        //     label: 'Crud Cliente'
        //   },
        //   {
        //     label: 'HTML 2'
        //   }
        // ]
      },
      {
        label: 'Habitaciones',
        routerLink: '/nombre'
        
      },
      {
        label: 'Personas',
        routerLink: '/nombre'
      },
      {
        label: 'Reservas',
        routerLink: '/cedula'
      },
      {
        label: 'Agencias de Viaje',
        routerLink: '/nombre'
      }

    ];
  }

}
