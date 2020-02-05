import { RouterModule, Routes } from '@angular/router';
import { FacturaComponent } from './componentes/factura/factura.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { GastosComponent } from './componentes/gastos/gastos.component';
import { HomeComponent } from './componentes/home/home.component';
import { DetalleFacturaComponent } from './componentes/detalle-factura/detalle-factura.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'factura', component: FacturaComponent},
    {path: 'buscar', component: BuscarComponent},
    {path: 'gastos', component: GastosComponent},
    {path: 'detallefactura/:id', component: DetalleFacturaComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});