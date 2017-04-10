import { Component, OnInit, Input } from '@angular/core';
import { NoticiasService } from "app/noticias.service";
import { Noticia } from "app/noticia";
import { OrdenacionService } from "app/ordenacion.service";
import { FiltradoService } from "app/filtrado.service";

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent implements OnInit {

  noticias: Noticia[] = [];

  campo: string;
  filtro: string;

  constructor(private service: NoticiasService, private serviceOrdenacion: OrdenacionService, private serviceFiltrado:FiltradoService) { }

  ngOnInit() {
    this.serviceOrdenacion.subject.subscribe(campo => this.campo = campo);
    this.serviceFiltrado.subject.subscribe(filtro => this.filtro = filtro);
    this.service.getNoticiasObserver().subscribe(lista => this.noticias = lista);
  }

  getNoticias() {
    return this.service.getNoticias();
  }

  eliminarNoticia(noticia: Noticia) {
    this.service.eliminar(noticia);
  }

}
