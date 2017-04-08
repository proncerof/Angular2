import { Component, OnInit } from '@angular/core';
import { OrdenacionService } from "app/ordenacion.service";

@Component({
  selector: 'app-ordenacion',
  templateUrl: './ordenacion.component.html',
  styleUrls: ['./ordenacion.component.css']
})
export class OrdenacionComponent implements OnInit {

  componente:string;

  constructor(private servicio:OrdenacionService) { }

  ngOnInit() {
    this.servicio.subject.next(this.componente);
  }

}
