import { Component, OnInit } from '@angular/core';
import { Encargado } from './encargado.model';
import { TipoEncargado } from '../tipo-encargado/tipo-encargado.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-encargado',
  templateUrl: './encargado.component.html',
  styleUrls: ['./encargado.component.css']
})
export class EncargadoComponent implements OnInit {

  public encargado: Encargado[];
  public tipoEncargado: TipoEncargado[];
  public titlulo = 'Lista de Encargados';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getEncargado().subscribe((data) => { this.encargado = data });
    this.dataService.getTipoEncargado().subscribe((data) => { this.tipoEncargado = data });
  }

}
