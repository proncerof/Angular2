import { Component, OnInit } from '@angular/core';
import { NoticiasService } from "app/noticias.service";
import { Noticia } from "app/noticia";
import { OrdenacionService } from "app/ordenacion.service";

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent implements OnInit {

  noticias: Noticia[] = [];
  campo:string;

  constructor(private service:NoticiasService, private serviceOrdenacion: OrdenacionService) { }

  ngOnInit() {
    this.service.getNoticias().subscribe(list=>this.noticias=list);
    this.serviceOrdenacion.subject.subscribe(campo=>this.campo=campo);
  }

}
