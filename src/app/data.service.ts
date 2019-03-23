import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recurso, RecursoPost } from './recurso/recurso.model';
import { TipoRecurso, TipoRecursoPost } from './tipo-recurso/tipo-recurso.model';
import { Proveedor, ProveedorPost } from './proveedor/proveedor.model';
import { Encargado, EncargadoPost } from './encargado/encargado.model';
import { TipoEncargado, TipoEncargadoPost } from './tipo-encargado/tipo-encargado.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'http://127.0.0.1:8000/api/v1/';


  constructor(private _http: HttpClient) { }

  putRecurso(id: number, recurso: RecursoPost) {
    return this._http.put(this.apiUrl + 'recurso/' + id + '/', recurso);
  }

  putProveedor(id: number, proveedor: Proveedor) {
    return this._http.put(this.apiUrl + 'proveedor/' + id + '/', proveedor);
  }

  putEncargado(id: number, encargado: Encargado) {
    return this._http.put(this.apiUrl + 'encargado/' + id + '/', encargado);
  }

  putTipoRecurso(id: number, tipoRecurso: TipoRecurso) {
    return this._http.put(this.apiUrl + 'tiporecurso/' + id + '/', tipoRecurso);
  }

  putTipoEncargado(id: number, tipoencargado: TipoEncargado) {
    return this._http.put(this.apiUrl + 'tipoencargado/' + id + '/', tipoencargado);
  }

  deleteRecurso(id: number) {
    return this._http.delete(this.apiUrl + 'recurso/' + id);
  }

  deleteProveedor(id: number) {
    return this._http.delete(this.apiUrl + 'proveedor/' + id);
  }

  deleteEncargado(id: number) {
    return this._http.delete(this.apiUrl + 'encargado/' + id);
  }

  deleteTipoRecurso(id: number) {
    return this._http.delete(this.apiUrl + 'tiporecurso/' + id);
  }

  deleteTipoEncargado(id: number) {
    return this._http.delete(this.apiUrl + 'tipoencargado/' + id);
  }

  postRecurso(recurso: RecursoPost) {
    return this._http.post(this.apiUrl + 'recurso/', recurso);
  }

  postProveedor(proveedor: ProveedorPost) {
    return this._http.post(this.apiUrl + 'proveedor/', proveedor);
  }

  postEncargado(encargado: EncargadoPost) {
    return this._http.post(this.apiUrl + 'encargado/', encargado);
  }

  postTipoRecurso(tipoRecurso: TipoRecursoPost) {
    return this._http.post(this.apiUrl + 'tiporecurso/', tipoRecurso);
  }

  postTipoEncargado(tipoencargado: TipoEncargadoPost) {
    return this._http.post(this.apiUrl + 'tipoencargado/', tipoencargado);
  }

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
