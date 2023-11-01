import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//hoteles
import { NombresComponent } from './components/Hoteles/nombre/nombre.component';
import { DireccionesComponent } from './components/Hoteles/direccion/direccion.component';
import { ConstruccionComponent } from './components/Hoteles/construccion/construccion.component';
//habitaciones
import { CodigoComponent } from './components/Habitaciones/codigo/codigo.component';
import { TipoComponent } from './components/Habitaciones/tipo/tipo.component';
//reservas
import { CedulaComponent } from './components/Reservas/cedula/cedula.component';
import { FechadeingresoComponent } from './components/Reservas/fechadeingreso/fechadeingreso.component';
import { FechadesalidaComponent } from './components/Reservas/fechadesalida/fechadesalida.component';
//personas
import { TelefonoComponent } from './components/Personas/telefono/telefono.component';
import { NombreComponent } from './components/Personas/nombre/nombre.component';



const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/', 
    pathMatch: 'full' 
  },
  {
    path: "nombres",
    component:NombresComponent
  },
  {
    path: "Direccion",
    component: DireccionesComponent
  },
  {
    path: "construccion",
    component: ConstruccionComponent
  },
  {
    path: "codigo",
    component: CodigoComponent
  },

  {
    path: "tipo",
    component:TipoComponent
  },

  {
    path: "cedula",
    component:CedulaComponent
  },
  {
    path: "fecha de ingreso",
    component: FechadeingresoComponent
  },

  {
    path: "fecha de salida",
    component:FechadesalidaComponent
  },

  {
    path: "telefono",
    component:TelefonoComponent
  },
  {
    path: "nombre",
    component:NombreComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
