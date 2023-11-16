import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { ContentComponent } from './components/layouts/content/content.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { AsideComponent } from './components/layouts/aside/aside.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MostrarClientesComponent } from './components/clientes/mostrar-clientes/mostrar-clientes.component';
import { EliminarClienteComponent } from './components/clientes/eliminar-cliente/eliminar-cliente.component';
import { ActualizarClienteComponent } from './components/clientes/actualizar-cliente/actualizar-cliente.component';
import { CrearClienteComponent } from './components/clientes/crear-cliente/crear-cliente.component';
import { MostrarProductoComponent } from './components/productos/mostrar-producto/mostrar-producto.component';
import { EliminarProductoComponent } from './components/productos/eliminar-producto/eliminar-producto.component';
import { CrearProductoComponent } from './components/productos/crear-producto/crear-producto.component';
import { ActualizarProductoComponent } from './components/productos/actualizar-producto/actualizar-producto.component';
import { EliminarTipoProductoComponent } from './components/TipoProucto/eliminar-tipo-producto/eliminar-tipo-producto.component';
import { MostrarTipoProductoComponent } from './components/TipoProucto/mostrar-tipo-producto/mostrar-tipo-producto.component';
import { CrearTipoProductoComponent } from './components/TipoProucto/crear-tipo-producto/crear-tipo-producto.component';
import { ActualizarTipoProductoComponent } from './components/TipoProucto/actualizar-tipo-producto/actualizar-tipo-producto.component';
import { MostrarVentasComponent } from './components/Ventas/mostrar-ventas/mostrar-ventas.component';
import { EliminarVentasComponent } from './components/Ventas/eliminar-ventas/eliminar-ventas.component';
import { CrearVentasComponent } from './components/Ventas/crear-ventas/crear-ventas.component';
import { ActualizarVentasComponent } from './components/Ventas/actualizar-ventas/actualizar-ventas.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    AsideComponent,
    MostrarClientesComponent,
    EliminarClienteComponent,
    ActualizarClienteComponent,
    CrearClienteComponent,
    MostrarProductoComponent,
    EliminarProductoComponent,
    CrearProductoComponent,
    ActualizarProductoComponent,
    EliminarTipoProductoComponent,
    MostrarTipoProductoComponent,
    CrearTipoProductoComponent,
    ActualizarTipoProductoComponent,
    MostrarVentasComponent,
    EliminarVentasComponent,
    CrearVentasComponent,
    ActualizarVentasComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
