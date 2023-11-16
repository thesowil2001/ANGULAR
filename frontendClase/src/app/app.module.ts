import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContentComponent } from './components/layout/content/content.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AsideComponent } from './components/layout/aside/aside.component';

import { PanelMenuModule } from 'primeng/panelmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MostrarClienteComponent } from './components/cliente/mostrar-cliente/mostrar-cliente.component';
import { CrearClienteComponent } from './components/cliente/crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';
import { EliminarClienteComponent } from './components/cliente/eliminar-cliente/eliminar-cliente.component';
import { MostrarTipoProductoComponent } from './components/tipoProducto/mostrar-tipo-producto/mostrar-tipo-producto.component';
import { CrearTipoProductoComponent } from './components/tipoProducto/crear-tipo-producto/crear-tipo-producto.component';
import { ActualizarTipoProductoComponent } from './components/tipoProducto/actualizar-tipo-producto/actualizar-tipo-producto.component';
import { EliminarTipoProductoComponent } from './components/tipoProducto/eliminar-tipo-producto/eliminar-tipo-producto.component';
import { MostrarProductoComponent } from './components/producto/mostrar-producto/mostrar-producto.component';
import { CrearProductoComponent } from './components/producto/crear-producto/crear-producto.component';
import { ActualizarProductoComponent } from './components/producto/actualizar-producto/actualizar-producto.component';
import { EliminarProductoComponent } from './components/producto/eliminar-producto/eliminar-producto.component';
import { MostrarVentaComponent } from './components/venta/mostrar-venta/mostrar-venta.component';
import { CrearVentaComponent } from './components/venta/crear-venta/crear-venta.component';
import { ActualizarVentaComponent } from './components/venta/actualizar-venta/actualizar-venta.component';
import { EliminarVentaComponent } from './components/venta/eliminar-venta/eliminar-venta.component';
import { FormularioComponent } from './components/cliente/formulario/formulario.component';
import { FormularioProductoComponent } from './components/producto/formulario-producto/formulario-producto.component';
import { FormularioVentaComponent } from './components/venta/formulario-venta/formulario-venta.component';
import { FormularioTproductoComponent } from './components/tipoProducto/formulario-tproducto/formulario-tproducto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    AsideComponent,
    MostrarClienteComponent,
    CrearClienteComponent,
    ActualizarClienteComponent,
    EliminarClienteComponent,
    MostrarTipoProductoComponent,
    CrearTipoProductoComponent,
    ActualizarTipoProductoComponent,
    EliminarTipoProductoComponent,
    MostrarProductoComponent,
    CrearProductoComponent,
    ActualizarProductoComponent,
    EliminarProductoComponent,
    MostrarVentaComponent,
    CrearVentaComponent,
    ActualizarVentaComponent,
    EliminarVentaComponent,
    FormularioComponent,
    FormularioProductoComponent,
    FormularioVentaComponent,
    FormularioTproductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PanelMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
