import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FacturaComponent } from './componentes/factura/factura.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { ClientesService } from './servicio/clientes.service';
import { DetalleFacturaComponent } from './componentes/detalle-factura/detalle-factura.component';
import { APP_ROUTING } from './app.routes';
import { GastosComponent } from './componentes/gastos/gastos.component';
import { HomeComponent } from './componentes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FacturaComponent,
    BuscarComponent,
    DetalleFacturaComponent,
    GastosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
