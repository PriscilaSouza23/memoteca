import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-lista-pensamentos',
  templateUrl: './lista-pensamentos.component.html',
  styleUrls: ['./lista-pensamentos.component.css']
})
export class ListaPensamentosComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

}
