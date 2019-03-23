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

  tiporecur = {
    descripcion: null,
  }
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTipoRecursos().subscribe((data) => { this.tipoRecurso = data });
  }

  mostrarForm() {
    this.is_hidden = !this.is_hidden;
  }

  guardarTipoRecurso() {
    this.dataService.postTipoRecurso(this.tiporecur).subscribe((res) => {
      alert("Tipo de Recurso Guardado!");
      console.log("Tipo de Recurso Creado");
      this.ngOnInit();
    });
  }

}
