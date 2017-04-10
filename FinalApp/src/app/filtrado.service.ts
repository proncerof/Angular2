import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class FiltradoService {

  constructor(public subject:Subject<string>) { }

}
