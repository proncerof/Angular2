import { Component, OnInit } from '@angular/core';
import { OrdenacionService } from "app/ordenacion.service";
import { FiltradoService } from "app/filtrado.service";

@Component({
  selector: 'app-ordenacion',
  templateUrl: './ordenacion.component.html',
  styleUrls: ['./ordenacion.component.css']
})
export class OrdenacionComponent implements OnInit {

  componente:string;
  filtro:string;

  constructor(private servicioOrdenacion:OrdenacionService, private servicioFiltrado:FiltradoService) { }

  ngOnInit() {
  }

  sendComponente(){
    this.servicioOrdenacion.subject.next(this.componente);
  }

  sendFiltrado(){
    this.servicioFiltrado.subject.next(this.filtro);
  }

}
