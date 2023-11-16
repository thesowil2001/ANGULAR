import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContentComponent } from './components/layout/content/content.component';
import { FooterComponent } from './components/layout/footer/footer.component';

import {MenubarModule} from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//cliente
import { MostrarClienteComponent } from './components/cliente/mostrar-cliente/mostrar-cliente.component';
import { CrearClienteComponent } from './components/cliente/crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';
import { EliminarClienteComponent } from './components/cliente/eliminar-cliente/eliminar-cliente.component';
//tipoproducto
import { MostrarTipoProductoComponent } from './components/tipoProducto/mostrar-tipo-producto/mostrar-tipo-producto.component';
import { CrearTipoProductoComponent } from './components/tipoProducto/crear-tipo-producto/crear-tipo-producto.component';
import { ActualizarTipoProductoComponent } from './components/tipoProducto/actualizar-tipo-producto/actualizar-tipo-producto.component';
import { EliminarTipoProductoComponent } from './components/tipoProducto/eliminar-tipo-producto/eliminar-tipo-producto.component';
//productos
import { MostrarProductoComponent } from './components/producto/mostrar-producto/mostrar-producto.component';
import { CrearProductoComponent } from './components/producto/crear-producto/crear-producto.component';
import { ActualizarProductoComponent } from './components/producto/actualizar-producto/actualizar-producto.component';
import { EliminarProductoComponent } from './components/producto/eliminar-producto/eliminar-producto.component';
//ventas
import { MostrarVentaComponent } from './components/venta/mostrar-venta/mostrar-venta.component';
import { CrearVentaComponent } from './components/venta/crear-venta/crear-venta.component';
import { ActualizarVentaComponent } from './components/venta/actualizar-venta/actualizar-venta.component';
import { EliminarVentaComponent } from './components/venta/eliminar-venta/eliminar-venta.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    //clientes
    MostrarClienteComponent,
    CrearClienteComponent,
    ActualizarClienteComponent,
    EliminarClienteComponent,
    //tipoproducto
    MostrarTipoProductoComponent,
    CrearTipoProductoComponent,
    ActualizarTipoProductoComponent,
    EliminarTipoProductoComponent,
    //producto
    MostrarProductoComponent,
    CrearProductoComponent,
    ActualizarProductoComponent,
    EliminarProductoComponent,
    //venta
    MostrarVentaComponent,
    CrearVentaComponent,
    ActualizarVentaComponent,
    EliminarVentaComponent
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
