import { Component ,  OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  opc: MenuItem[] = [];
  ngOnInit(): void {
    this.opc = [
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi-users',
        routerLink: '/clientes',
        items: [
          {
            label: 'mostrar Cliente',
            icon: 'pi pi-fw pi-users',
          },
          {
            label: 'eliminar cliente',
            icon: 'pi pi-fw pi-users',
          },
          {
            label: 'crear Cliente',
            icon: 'pi pi-fw pi-users',
          },
          {
            label: 'actualizar Cliente',
            icon: 'pi pi-fw pi-users',
          },
        ]
      },
      {
        label: 'Tipo Productos',
        icon: 'pi pi-fw pi-qrcode',
        routerLink: '/TipoProducto',
        items:[
          {
            label: 'mostrar TipoProducto',
            icon: 'pi pi-fw pi-qrcode',
          },
          {
            label: 'eliminar TipoProducto',
            icon: 'pi pi-fw pi-qrcode',
          },
          {
            label: 'crear TipoProducto',
            icon: 'pi pi-fw pi-qrcode',
          },
          {
            label: 'actualizar TipoProducto',
            icon: 'pi pi-fw pi-qrcode',
          },
        ]
      },
      {
        label: 'Productos',
        icon: 'pi pi-fw pi-shopping-bag',
        routerLink: '/productos',
        items: [
          {
            label: 'mostrar-producto',
            icon: 'pi pi-fw pi-shopping-bag',
          },
          {
            label: 'eliminar-producto',
            icon: 'pi pi-fw pi-shopping-bag',
          },
          {
            label: 'crear-producto',
            icon: 'pi pi-fw pi-shopping-bag',
          },
          {
            label: 'actualizar-producto',
            icon: 'pi pi-fw pi-shopping-bag',
          }
        ]
      },
      {
        label: 'Ventas',
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: '/Ventas',
        items: [
          {
            label: 'mostrar-Ventas',
            icon: 'pi pi-fw pi-shopping-cart',
          },
          {
            label: 'eliminar-Ventas',
            icon: 'pi pi-fw pi-shopping-cart',
          },
          {
            label: 'crear-Ventas',
            icon: 'pi pi-fw pi-shopping-cart',
          },
          {
            label: 'actualizar-Ventas',
            icon: 'pi pi-fw pi-shopping-cart',
          }
        ]
      }

    ];
  }

}
