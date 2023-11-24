import { Component, OnInit } from '@angular/core';
import { ClienteI } from 'src/app/models/cliente';
import { Router } from '@angular/router';
import { ClienteService } from '../../../services/cliente.service'

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarClienteComponent implements OnInit {
  public clientes:ClienteI[] = []
  public displayedColumns: string[] = ["id", "nombreCliente", "direccionCliente", "telefonoCliente"]
  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarClientes()
  }

  mostrarClientes() {
    this.clienteService.getAllCliente()
      .subscribe({
        next: (data) => {
          this.clientes = data.cliente
          console.log(this.clientes)
        }
      })
  }
}
