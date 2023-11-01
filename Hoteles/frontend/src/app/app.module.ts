import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContentComponent } from './components/layout/content/content.component';
import { FooterComponent } from './components/layout/footer/footer.component';

import {MenubarModule} from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { DireccionComponent } from './components/Personas/direccion/direccion.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    //hoteles
    NombresComponent,
    DireccionesComponent,
    ConstruccionComponent,
     //habitaciones
    CodigoComponent,
    TipoComponent,
    CedulaComponent,
    FechadeingresoComponent,
    FechadesalidaComponent,
    TelefonoComponent,
    NombreComponent,
    DireccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
