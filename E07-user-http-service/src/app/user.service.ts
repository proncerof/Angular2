import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from './user';
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";


@Injectable()
export class UserService {

  private url = "https://randomuser.me/api/?results=5";
  constructor(private http:Http) { }

  getUsers (): Observable<User[]>{
    return this.http.get(this.url).
            map(this.extractData).
            catch(this.handleError);
  }

  private extractData(res: Response){ 
    let users: User[];
    for(let result of res.json()["results"]){
      users.push(
        new User(
          result["gender"],
          result["name"]["first"],
          result["name"]["last"],
        )
      )
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
