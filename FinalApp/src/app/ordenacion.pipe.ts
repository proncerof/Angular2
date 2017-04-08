import { Pipe, PipeTransform } from '@angular/core';
import { Noticia } from "app/noticia";

@Pipe({
  name: 'ordenacion'
})
export class OrdenacionPipe implements PipeTransform {

  transform(noticias: Noticia[], campo: string): any {
    return noticias.sort((a: Noticia, b: Noticia) => {
      if (a[campo] < b[campo]) {
        return -1
      }
      if (a[campo] == b[campo]) {
        return 0
      }
      return 1;
    });
  }
}
