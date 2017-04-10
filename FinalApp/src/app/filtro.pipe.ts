import { Pipe, PipeTransform } from '@angular/core';
import { Noticia } from "app/noticia";

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(noticias:Noticia[], filtro: string): Noticia[] {
   return noticias.filter((noticia: Noticia, index: number, array: Noticia[]) => filtro==null?true:noticia.title.includes(filtro));
  }

}
