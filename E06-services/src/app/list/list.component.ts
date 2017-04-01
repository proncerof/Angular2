import { Component, OnInit } from '@angular/core';
import { Contacto } from './../contacto';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listContacto: Contacto[] = [new Contacto("Pablo","Ronero",679249287)
    , new Contacto("Nico","Pascu",679249287)
    , new Contacto("Pablo","Miranda",679249287)
    , new Contacto("Fernando","Freije",679249287)];

    nombre: string;
    apellido: string;
    telefono: number;

    displayText:string = "visible";
    visible:boolean = true;

  constructor() {
   }

  ngOnInit() {
  }

  eliminar(contacto:Contacto){
    var index = this.listContacto.indexOf(contacto);
    if(index>-1)
      this.listContacto.splice(index,1);
  }

  eliminarPorTelefono(){
    var index = this.listContacto.findIndex(c=>c.telefono===this.telefono);
    this.listContacto.splice(index,1);

  }

  add(){
    this.listContacto.push(new Contacto(this.nombre, this.apellido, this.telefono));
  }

  toggle(){
    this.visible = !this.visible;
    this.displayText = this.visible ? "show-class" : "hide-class";
  }

}
