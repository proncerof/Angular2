import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from "app/noticia";

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  @Input() noticia:Noticia;

  constructor( ) { }

  ngOnInit() {
  }

}
