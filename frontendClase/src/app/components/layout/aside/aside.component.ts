import { Component, OnInit } from '@angular/core';
import {  PrimeIcons, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  opc: MenuItem[] = [];
 
  ngOnInit() {
    this.opc = [
        {
            label: 'Clientes',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'Crear Nuevo Cliente',
                    icon: 'pi pi-fw pi-plus',
                    routerLink: '/crear-cliente'
                   
                },
                {
                    label: 'Mostrar Cliente',
                    icon: 'pi pi-search',
                    routerLink: '/clientes'
                },
                {
                    label: 'Actualizar Cliente',
                    icon: 'pi pi-fw pi-pencil'
                },
                {
                    label: 'Eliminar Cliente',
                    icon:  PrimeIcons.TRASH,
                    routerLink: '/eliminar-cliente'
                }
            ]
        },
        {
            label: 'Productos',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'Crear Nuevo Producto',
                    icon: 'pi pi-fw pi-plus',
                    routerLink: 'crear-productos'
                   
                },
                {
                    label: 'Mostrar Producto',
                    icon: 'pi pi-search',
                    routerLink: 'productos'
                },
                {
                    label: 'Actualizar Producto',
                    icon: 'pi pi-fw pi-pencil',
                    routerLink: 'actulizar-productos'
                },
                {
                    label: 'Eliminar Producto',
                    icon:  PrimeIcons.TRASH,
                    routerLink: 'eliminar-productos'
                }
            ]
        },
        {
            label: 'Tipo Producto',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'Crear Nuevo Tipo producto',
                    icon: 'pi pi-fw pi-plus',
                    routerLink: 'crear-tipo-productos'
                   
                },
                {
                    label: 'Mostrar Tipo producto',
                    icon: 'pi pi-search',
                    routerLink: 'Tipo-productos'
                },
                {
                    label: 'Actualizar Tipo producto',
                    icon: 'pi pi-fw pi-pencil',
                    routerLink: 'actulizar-tipo-productos'
                },
                {
                    label: 'Eliminar Tipo producto',
                    icon:  PrimeIcons.TRASH,
                    routerLink: 'eliminar-tipo-productos'
                }
            ]
        },
        {
            label: 'Ventas',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'Crear Nueva Venta',
                    icon: 'pi pi-fw pi-plus',
                    routerLink: 'crear-venta'
                   
                },
                {
                    label: 'Mostrar Ventas',
                    icon: 'pi pi-search',
                    routerLink: 'Ventas'
                },
                {
                    label: 'Actualizar Ventas',
                    icon: 'pi pi-fw pi-pencil',                
                    routerLink: 'actualizar-venta'
                },
                {
                    label: 'Eliminar Venta',
                    icon:  PrimeIcons.TRASH,
                    routerLink: 'eliminar-venta'
                }
            ]
        }
    ];
}


}
