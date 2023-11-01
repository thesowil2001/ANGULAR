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
        label: 'Clientes',
        icon: 'pi pi-fw pi-users',
        routerLink: '/cliente'


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
        label: 'tipoProducto',
        icon: 'pi pi-fw pi-qrcode',
        routerLink: '/tipoproducto'
      },
      {
        label: 'producto',
        icon: 'pi pi-fw pi-shopping-bag',
        routerLink: '/producto'
      },
      {
        label: 'Venta',
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: '/venta'
      }

    ];
  }

}
