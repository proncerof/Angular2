import { Injectable } from '@angular/core';
import { Contacto } from './contacto';

@Injectable()
export class ContactService {

   listContacto: Contacto[] = [new Contacto("Pablo","Ronero",679249287)
    , new Contacto("Nico","Pascu",679249287)
    , new Contacto("Pablo","Miranda",679249287)
    , new Contacto("Fernando","Freije",679249287)];


  constructor() { }

  getList(){
    return this.listContacto;
  }

   eliminar(contacto:Contacto){
    var index = this.listContacto.indexOf(contacto);
    if(index>-1)
      this.listContacto.splice(index,1);
  }

  eliminarPorTelefono(telefono:number){
    var index = this.listContacto.findIndex(c=>c.telefono===telefono);
    this.listContacto.splice(index,1);

  }

  add(nombre:string, apellido:string, telefono:number){
    this.listContacto.push(new Contacto(nombre, apellido, telefono));
  }

 

}
