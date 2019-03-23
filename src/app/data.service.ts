import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recurso } from './recurso/recurso.model';
import { TipoRecurso } from './tipo-recurso/tipo-recurso.model';
import { Proveedor } from './proveedor/proveedor.model';
import { Encargado } from './encargado/encargado.model';
import { TipoEncargado } from './tipo-encargado/tipo-encargado.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'http://127.0.0.1:8000/api/v1/';


  constructor(private _http: HttpClient) { }

  getRecursos() {
    return this._http.get<Recurso[]>(this.apiUrl + 'recurso/');
  }

  getTipoRecursos() {
    return this._http.get<TipoRecurso[]>(this.apiUrl + 'tiporecurso/');
  }

  getTipoRecursosId(id) {
    return this._http.get<TipoRecurso>(this.apiUrl + 'tiporecurso/' + id);
  }

  getProveedor() {
    return this._http.get<Proveedor[]>(this.apiUrl + 'proveedor/');
  }

  getEncargado() {
    return this._http.get<Encargado[]>(this.apiUrl + 'encargado/');
  }

  getTipoEncargado() {
    return this._http.get<TipoEncargado[]>(this.apiUrl + 'tipoencargado/');
  }

}
