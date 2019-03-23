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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTipoRecursos().subscribe((data) => { this.tipoRecurso = data });
  }

}
