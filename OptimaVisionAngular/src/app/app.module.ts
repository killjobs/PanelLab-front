import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FacturaComponent } from './componentes/factura/factura.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { ClientesService } from './servicio/clientes.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FacturaComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
