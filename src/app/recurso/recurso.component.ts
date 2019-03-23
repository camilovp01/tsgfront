import { Component, OnInit } from '@angular/core';
import { Recurso } from './recurso.model';
import { DataService } from '../data.service';
import { TipoRecurso } from '../tipo-recurso/tipo-recurso.model';
import { Proveedor } from '../proveedor/proveedor.model';
import { Encargado } from '../encargado/encargado.model';

@Component({
  selector: 'app-recurso',
  templateUrl: './recurso.component.html',
  styleUrls: ['./recurso.component.css']
})
export class RecursoComponent implements OnInit {
  public tipoRecurso: TipoRecurso[];
  public recursos: Recurso[];
  public proveedor: Proveedor[];
  public encargado: Encargado[];
  public titlulo = 'Lista de Recursos';
  public is_hidden = true;
  public is_edit = false;

  recurso = {
    id: null,
    serial: null,
    tipo: null,
    proveedor: null,
    estado: null,
    encargado: null,
    marca: null,
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTipoRecursos().subscribe((data) => { this.tipoRecurso = data });
    this.dataService.getRecursos().subscribe((data) => { this.recursos = data });
    this.dataService.getProveedor().subscribe((data) => { this.proveedor = data });
    this.dataService.getEncargado().subscribe((data) => { this.encargado = data });
  }

  mostrarForm(recurso?: Recurso) {
    if (recurso) {
      this.recurso.id = recurso.id;
      this.recurso.serial = recurso.serial;
      this.recurso.tipo = recurso.tipo;
      this.recurso.proveedor = recurso.proveedor;
      this.recurso.estado = recurso.estado;
      this.recurso.encargado = recurso.encargado;
      this.recurso.marca = recurso.marca;
      this.is_edit = true;
    } else {
      this.recurso.id = null;
      this.recurso.serial = null;
      this.recurso.tipo = null;
      this.recurso.proveedor = null;
      this.recurso.estado = null;
      this.recurso.encargado = null;
      this.recurso.marca = null;
      this.is_edit = false;
    }
    this.is_hidden = !this.is_hidden;
  }

  guardarRecurso(is_edit: boolean) {
    if (is_edit) {
      this.dataService.putRecurso(this.recurso.id, this.recurso).subscribe((res) => {
        alert("Recurso Editado!");
        console.log("Recurso Editado");
        this.ngOnInit();
      });
    } else {
      this.dataService.postRecurso(this.recurso).subscribe((res) => {
        alert("Recurso Guardado!");
        console.log("Recurso Creado");
        this.ngOnInit();
      });
    }

  }

  borrarRecurso(id: number, nombre: string) {
    if (confirm("Se eliminara recurso con serial: " + nombre)) {
      this.dataService.deleteRecurso(id).subscribe((res) => {
        alert("Recurso Borrado!");
        console.log("Recurso Borrado");
        this.ngOnInit();
      });
    }

  }



}
