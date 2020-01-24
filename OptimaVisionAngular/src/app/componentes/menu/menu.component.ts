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
      nombre:"insertBill",
      descripcion:"Agregar Facturas"
    },
    {
      index:1,
      nombre:"searchClients",
      descripcion:"Buscar Clientes"
    },
    {
      index:2,
      nombre:"insertExpenses",
      descripcion:"Ingresar Gastos"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
