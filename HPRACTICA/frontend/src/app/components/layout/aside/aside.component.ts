import { Component,OnInit  } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
      this.items = [
          {
              label: 'Clientes',
              icon: 'pi pi-fw pi-users',
              routerLink: '/clientes',
              items: [
                  {
                      label: 'mostrar',
                      icon: 'pi pi-fw pi-users',
                  },
                  {
                      label: 'crear',
                      icon: 'pi pi-fw pi-users'
                  },
                  {
                    label: 'actualizar',
                    icon: 'pi pi-fw pi-users'
                },
                {
                  label: 'eliminar',
                  icon: 'pi pi-fw pi-users'
              },
              ]
          },
          {
              label: 'Tipo Productos',
              icon: 'pi pi-fw pi-qrcode',
              routerLink: '/tipoproductos',
              items: [
                  {
                      label: 'mostrar',
                      icon: 'pi pi-fw pi-qrcode'
                  },
                  {
                      label: 'crear',
                      icon: 'pi pi-fw pi-qrcode'
                  },
                  {
                      label: 'actualizar',
                      icon: 'pi pi-fw pi-qrcode'
                  },
                  {
                      label: 'eliminar',
                      icon: 'pi pi-fw pi-qrcode'
                  }
              ]
          },
          {
            label: 'Productos',
            icon: 'pi pi-fw pi-shopping-bag',
            routerLink: '/productos',
            items: [
                {
                    label: 'mostrar',
                    icon: 'pi pi-fw pi-shopping-bag'
                },
                {
                    label: 'crear',
                    icon: 'pi pi-fw pi-shopping-bag'
                },
                {
                    label: 'actualizar',
                    icon: 'pi pi-fw pi-shopping-bag'
                },
                {
                    label: 'eliminar',
                    icon: 'pi pi-fw pi-shopping-bag'
                }
            ]
        },
          {
            label: 'Ventas',
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink: '/ventas',
            items: [
                {
                    label: 'mostrar',
                    icon: 'pi pi-fw pi-shopping-cart'
                },
                {
                    label: 'crear',
                    icon: 'pi pi-fw pi-shopping-cart'
                },
                {
                    label: 'actualizar',
                    icon: 'pi pi-fw pi-shopping-cart'
                },
                {
                    label: 'eliminar',
                    icon: 'pi pi-fw pi-shopping-cart'
                }
            ]
          }
      ];
  }
}
