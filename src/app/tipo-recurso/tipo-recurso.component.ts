import { Component, OnInit } from '@angular/core';
import { TipoRecurso } from './tipo-recurso.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tipo-recurso',
  templateUrl: './tipo-recurso.component.html',
  styleUrls: ['./tipo-recurso.component.css']
})
export class TipoRecursoComponent implements OnInit {

  public tipoRecurso: TipoRecurso[];
  public titlulo = 'Lista de Tipos de Recursos';
  public is_hidden = true;
  public is_edit = false;

  tiporecur = {
    id: null,
    descripcion: null,
  }
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTipoRecursos().subscribe((data) => { this.tipoRecurso = data });
  }

  mostrarForm(tipoRecurso?: TipoRecurso) {
    if (tipoRecurso) {
      this.tiporecur.id = tipoRecurso.id;
      this.tiporecur.descripcion = tipoRecurso.descripcion;
      this.is_edit = true;
    } else {
      this.tiporecur.id = null;
      this.tiporecur.descripcion = null;
      this.is_edit = false;
    }
    this.is_hidden = !this.is_hidden;
  }

  guardarTipoRecurso(is_edit: boolean) {
    if (is_edit) {
      this.dataService.putTipoRecurso(this.tiporecur.id, this.tiporecur).subscribe((res) => {
        alert("Tipo Recurso Editado!");
        console.log("Tipo Recurso Editado");
        this.ngOnInit();
      });
    } else {
      this.dataService.postTipoRecurso(this.tiporecur).subscribe((res) => {
        alert("Tipo de Recurso Guardado!");
        console.log("Tipo de Recurso Creado");
        this.ngOnInit();
      });
    }
  }

  borrarTipoRecurso(id: number, nombre: string) {
    if (confirm("Se eliminara tipo de recurso con el nombre: " + nombre)) {
      this.dataService.deleteTipoRecurso(id).subscribe((res) => {
        alert("Tipo Recurso Borrado!");
        console.log("Tipo Recurso Borrado");
        this.ngOnInit();
      });
    }
  }

}
