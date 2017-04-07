import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageComponent } from "app/message/message.component";

const routes: Routes = [
  { path: 'perfil', component: PerfilComponent },
  { path: 'messages', component: MessagesComponent},
  { path: 'messages/:id', component: MessageComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
