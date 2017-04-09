import { Component, OnInit, Input } from '@angular/core';
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

  campo: string;

  constructor(private service: NoticiasService, private serviceOrdenacion: OrdenacionService) { }

  ngOnInit() {
    this.serviceOrdenacion.subject.subscribe(campo => this.campo = campo);
    this.service.getNoticiasObserver().subscribe(lista => this.noticias = lista);
  }

  getNoticias() {
    return this.service.getNoticias();
  }

  eliminarNoticia(noticia: Noticia) {
    this.service.eliminar(noticia);
  }

}
