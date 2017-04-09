import { Injectable, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Noticia } from "app/noticia";
import { Http, Headers, RequestOptions, Response } from "@angular/http";

@Injectable()
export class NoticiasService implements OnInit {

  private url = "https://node­-hnapi.herokuapp.com/news?page=1";
  private noticias: Noticia[];

  constructor(private http: Http) {
    this.http.get(this.url)
  }

  ngOnInit() {
    this.getNoticiasObserver().subscribe(list => this.noticias = list);
  }

  getNoticias(): Noticia[] {
    return this.noticias;
  }

  getNoticiasObserver(): Observable<Noticia[]> {
    return this.http.get(this.url).
      map(this.extractData).
      catch(this.handleError);
  }

  eliminar(noticia: Noticia) {
    let index = this.noticias.indexOf(noticia);
    this.noticias.splice(index, 1);
  }

  private extractData(res: Response): Noticia[] {
    var noticias: Noticia[] = [];
    for (let result of res.json()) {
      noticias.push(
        new Noticia(
          result["id"],
          result["title"],
          result["user"],
          result["points"],
          result["time"],
          result["comments_count"],
          result["url"]
        )
      );
    }
    return noticias;

  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);


  }

}
