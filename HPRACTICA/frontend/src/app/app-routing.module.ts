import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './components/cliente/actualizar/actualizar.component';
import { CrearComponent } from './components/cliente/crear/crear.component';
import { MostrarComponent } from './components/cliente/mostrar/mostrar.component';
import { MostrarPComponent } from './components/producto/mostrar/mostrar.component';
import { MostrarTPComponent } from './components/tipoProducto/mostrar/mostrar.component';
import { MostrarVComponent } from './components/ventas/mostrar/mostrar.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/', 
    pathMatch: 'full' 
  },
  {
    path: "clientes",
    component: MostrarComponent 
  },
  {
    path: "addclientes",
    component: CrearComponent
  },
  {
    path: "clientes/edit/:id",
    component:  ActualizarComponent
  },
  {
    path: "tipoproductos",
    component: MostrarTPComponent
  },

  {
    path: "productos",
    component:MostrarPComponent
  },

  {
    path: "ventas",
    component:  MostrarVComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
