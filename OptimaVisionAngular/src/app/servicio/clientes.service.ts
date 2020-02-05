import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  listaClientes:any[] = [{
    NumeroDocumento:'1019213456',
    Nombre:'Julian Martinez',
    Telefono:'2772113',
    Factura:[{
      NumeroOrden:1,
      Fecha: '01-01-1990',
      formulaOD:'+0.50 -0.25 * 30 ',
      formulaOI:'N -1.00 * 125',
      ObservacionLentes:'POLY BLANCO',
      ObservacionMontura:'MONT SHASAY',
      Observaciones:'NA',
      TotalVenta:12345,
      AbonoVenta:345,
      SaldoVenta:12000
    },{
      NumeroOrden:2,
      Fecha:'01/01/1990',
      formulaOD:'+0.50 -0.25 * 30 ',
      formulaOI:'N -1.00 * 125',
      ObservacionLentes:'POLY BLANCO',
      ObservacionMontura:'MONT SHASAY',
      Observaciones:'NA',
      TotalVenta:12345,
      AbonoVenta:345,
      SaldoVenta:12000
    }]
  }];

  public getClientes(){
    return this.listaClientes;
  }
  constructor() { }
}
