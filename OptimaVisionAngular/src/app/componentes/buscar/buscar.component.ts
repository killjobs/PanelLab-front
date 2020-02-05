import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import {ClientesService} from '../../servicio/clientes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  listaClientes:any[] = [];
  
  public getClientes(){
    return this.listaClientes;
  }

  constructor(private _clientesService:ClientesService) { 


  }

  ngOnInit() {
    this.listaClientes = this._clientesService.getClientes();
    console.log(this.listaClientes);
  }

}
