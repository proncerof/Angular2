import { Component, OnInit } from '@angular/core';
import { Perfil } from "app/perfil";
import { UsuarioService } from "app/usuario.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  private perfil:Perfil

  constructor(private service:UsuarioService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(perfil=>this.perfil = perfil[0]);
  }

}
