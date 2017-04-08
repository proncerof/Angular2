import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class OrdenacionService {

  constructor(public subject:Subject<string>) { }

}
