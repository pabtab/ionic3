import { Injectable } from '@angular/core';

import { scanData } from "../../models/scan_data.model";
/*
  Generated class for the HistorialServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistorialServiceProvider {

  private _historial:any[] = [];

  constructor() {

  }


  agregar_historial(texto:string){
    let data = new scanData(texto);

    this._historial.unshift(data);

    console.log(this._historial);
  }

  cargar_historial(){
    return this._historial;
  }

}
