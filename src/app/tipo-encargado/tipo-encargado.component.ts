import { Component, OnInit } from '@angular/core';
import { TipoEncargado } from './tipo-encargado.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tipo-encargado',
  templateUrl: './tipo-encargado.component.html',
  styleUrls: ['./tipo-encargado.component.css']
})
export class TipoEncargadoComponent implements OnInit {

  public tipoEncargado: TipoEncargado[];
  public titlulo = 'Lista de Tipos de Encargados';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTipoEncargado().subscribe((data) => { this.tipoEncargado = data });
  }

}
