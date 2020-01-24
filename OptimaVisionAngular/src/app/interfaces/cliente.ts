import { Factura } from './factura'

export interface Cliente {
    NumeroDocumento:String;
    Nombre:String;
    Telefono:String;
    Factura?:Factura[];
}