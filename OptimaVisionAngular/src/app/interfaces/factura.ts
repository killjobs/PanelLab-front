export interface Factura {
    NumeroOrden:Number;
    Fecha:String;
    formulaOD?:String;
    formulaOI?:String;
    ObservacionLentes?:String;
    ObservacionMontura?:String;
    Observaciones?:String;
    TotalVenta:Number;
    AbonoVenta:Number;
    SaldoVenta:Number;
}