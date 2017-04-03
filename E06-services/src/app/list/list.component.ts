import { Component, OnInit } from '@angular/core';
import { Contacto } from './../contacto';
import { ContactService } from './../contact.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

 
    nombre: string;
    apellido: string;
    telefono: number;
    telefonoRemove: number;

    displayText:string = "visible";
    visible:boolean = true;

  constructor(private service :ContactService) {
   }

  ngOnInit() {
  }

  getList(){
    return this.service.getList();
  }

  eliminar(contacto:Contacto){
   this.service.eliminar(contacto);
  }

  eliminarPorTelefono(){
    this.service.eliminarPorTelefono(this.telefonoRemove);
  }

  add(){
   this.service.add(this.nombre, this.apellido, this.telefono);
  }


  toggle(){
    this.visible = !this.visible;
    this.displayText = this.visible ? "show-class" : "hide-class";
  }

}
