import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Perfil } from './perfil';
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()
export class UsuarioService {

  private url = "https://randomuser.me/api/?results=1";
  constructor(private http:Http) { 
    this.http.get(this.url);
  }

  getUsers (): Observable<Perfil[]>{
    return this.http.get(this.url).
            map(this.extractData).
            catch(this.handleError);
  }

  private extractData(res: Response): Perfil[]{ 
    var users: Perfil[] = [];
    for(let result of res.json()["results"]){
      users.push(
        new Perfil(
          result["name"]["first"],
          result["name"]["last"],
          result["picture"]["medium"],
          result["phone"]
        )
      );
    }
    return users;

  }

  private handleError(error : Response | any){
    let errMsg : string;
    if(error instanceof Response){
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body); 
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }else{
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);


  }

}
