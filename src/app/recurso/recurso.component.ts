import { Component, OnInit } from '@angular/core';
import { Recurso } from './recurso.model';
import { DataService } from '../data.service';
import { forEach } from '@angular/router/src/utils/collection';
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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTipoRecursos().subscribe((data) => { this.tipoRecurso = data });
    this.dataService.getRecursos().subscribe((data) => { this.recursos = data });
    this.dataService.getProveedor().subscribe((data) => { this.proveedor = data });
    this.dataService.getEncargado().subscribe((data) => { this.encargado = data });
  }


}
