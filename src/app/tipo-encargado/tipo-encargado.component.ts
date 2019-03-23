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
  public is_hidden = true;

  tipoencar = {
    descripcion: null,
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTipoEncargado().subscribe((data) => { this.tipoEncargado = data });
  }

  mostrarForm() {
    this.is_hidden = !this.is_hidden;
  }

  guardarTipoEncargado() {
    this.dataService.postTipoEncargado(this.tipoencar).subscribe((res) => {
      alert("Tipo de Encargado Guardado!");
      console.log("Tipo de Encargado Creado");
      this.ngOnInit();
    });
  }
}
