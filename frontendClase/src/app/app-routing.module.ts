import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';
import { CrearClienteComponent } from './components/cliente/crear-cliente/crear-cliente.component';
import { MostrarClienteComponent } from './components/cliente/mostrar-cliente/mostrar-cliente.component';
import { EliminarClienteComponent } from './components/cliente/eliminar-cliente/eliminar-cliente.component';

import { ActualizarProductoComponent } from './components/producto/actualizar-producto/actualizar-producto.component';
import { CrearProductoComponent } from './components/producto/crear-producto/crear-producto.component';
import { MostrarProductoComponent } from './components/producto/mostrar-producto/mostrar-producto.component';
import { EliminarProductoComponent } from './components/producto/eliminar-producto/eliminar-producto.component';

import { ActualizarVentaComponent } from './components/venta/actualizar-venta/actualizar-venta.component';
import { CrearVentaComponent } from './components/venta/crear-venta/crear-venta.component';
import { MostrarVentaComponent } from './components/venta/mostrar-venta/mostrar-venta.component';
import { EliminarVentaComponent } from './components/venta/eliminar-venta/eliminar-venta.component';

import { CrearTipoProductoComponent } from './components/tipoProducto/crear-tipo-producto/crear-tipo-producto.component';
import { MostrarTipoProductoComponent } from './components/tipoProducto/mostrar-tipo-producto/mostrar-tipo-producto.component';
import { ActualizarTipoProductoComponent } from './components/tipoProducto/actualizar-tipo-producto/actualizar-tipo-producto.component';
import { EliminarTipoProductoComponent } from './components/tipoProducto/eliminar-tipo-producto/eliminar-tipo-producto.component';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/', 
    pathMatch: 'full' 
  },
  {
    path: "clientes",
    component: MostrarClienteComponent
  },
  {
    path: "crear-cliente",
    component: CrearClienteComponent
  },
  {
    path: "eliminar-cliente",
    component: EliminarClienteComponent
  },
  {
    path: "clientes/edit/:id",
   component: ActualizarClienteComponent
   },
  
  {
    path: "productos",
    component: MostrarProductoComponent
  },
  {
    path: "eliminar-productos",
    component: EliminarProductoComponent
  },
  {
    path: "crear-productos",
    component: CrearProductoComponent
  },
  {
    path: "actulizar-productos",
    component: ActualizarProductoComponent
  },
  {
    path: "Tipo-productos",
    component: MostrarTipoProductoComponent
  },
  {
    path: "eliminar-tipo-productos",
    component: EliminarTipoProductoComponent
  },
  {
    path: "crear-tipo-productos",
    component: CrearTipoProductoComponent
  },
  {
    path: "actulizar-tipo-productos",
    component: ActualizarTipoProductoComponent
  },
{
   path: "Ventas",
    component: MostrarVentaComponent
  },
  {
    path: "eliminar-venta",
    component: EliminarVentaComponent
  },
  {
    path: "crear-venta",
    component: CrearVentaComponent
  },
  {
    path: "actualizar-venta",
    component: ActualizarVentaComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
