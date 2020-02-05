import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public titulo:String = "Menú de presentación";
  listadoMenus : any[] = [  
    {
      index:0,
      nombre:"home",
      descripcion:"Pagina Principal",
      rutaName: "home"
    },
    {
      index:1,
      nombre:"insertBill",
      descripcion:"Agregar Facturas",
      rutaName: "factura"
    },
    {
      index:2,
      nombre:"searchClients",
      descripcion:"Buscar Clientes",
      rutaName: "buscar"
    },
    {
      index:3,
      nombre:"insertExpenses",
      descripcion:"Ingresar Gastos",
      rutaName: "gastos"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
