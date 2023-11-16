import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarClientesComponent } from './components/clientes/mostrar-clientes/mostrar-clientes.component';
import { MostrarProductoComponent } from './components/productos/mostrar-producto/mostrar-producto.component';
import { MostrarTipoProductoComponent } from './components/TipoProucto/mostrar-tipo-producto/mostrar-tipo-producto.component';
import { MostrarVentasComponent } from './components/Ventas/mostrar-ventas/mostrar-ventas.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/', 
    pathMatch: 'full' 
  },
  {
    path: "clientes",
    component: MostrarClientesComponent
  },
  {
    path: "productos",
    component: MostrarProductoComponent 
  },
  {
    path: "TipoProducto",
    component: MostrarTipoProductoComponent
  },
  {
    path: "Ventas",
    component: MostrarVentasComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
