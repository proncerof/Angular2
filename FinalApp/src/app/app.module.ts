import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaNoticiasComponent } from './lista-noticias/lista-noticias.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiasService } from "app/noticias.service";
import { PerfilComponent } from './perfil/perfil.component';
import { UsuarioService } from "app/usuario.service";
import { OrdenacionComponent } from './ordenacion/ordenacion.component';
import { OrdenacionPipe } from './ordenacion.pipe';
import { OrdenacionService } from "app/ordenacion.service";
import { Subject } from "rxjs";

@NgModule({
  declarations: [
    AppComponent,
    ListaNoticiasComponent,
    NoticiaComponent,
    PerfilComponent,
    OrdenacionComponent,
    OrdenacionPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NoticiasService, UsuarioService, OrdenacionService, Subject],
  bootstrap: [AppComponent]
})
export class AppModule { }
