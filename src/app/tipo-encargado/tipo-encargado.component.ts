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
  public is_edit = false;

  tipoencar = {
    id: null,
    descripcion: null,
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTipoEncargado().subscribe((data) => { this.tipoEncargado = data });
  }

  mostrarForm(tipoEncargado: TipoEncargado) {
    if (tipoEncargado) {
      this.tipoencar.id = tipoEncargado.id;
      this.tipoencar.descripcion = tipoEncargado.descripcion;
      this.is_edit = true;
    } else {
      this.tipoencar.id = null;
      this.tipoencar.descripcion = null;
      this.is_edit = false;
    }
    this.is_hidden = !this.is_hidden;
  }

  guardarTipoEncargado(is_edit: boolean) {
    if (is_edit) {
      this.dataService.putTipoEncargado(this.tipoencar.id, this.tipoencar).subscribe((res) => {
        alert("Tipo Encargado Editado!");
        console.log("Tipo Encargado Editado");
        this.ngOnInit();
      });
    } else {
      this.dataService.postTipoEncargado(this.tipoencar).subscribe((res) => {
        alert("Tipo de Encargado Guardado!");
        console.log("Tipo de Encargado Creado");
        this.ngOnInit();
      });
    }
  }

  borrarTipoEncargado(id: number, nombre: string) {
    if (confirm("Se eliminara tipo de encargado con el nombre: " + nombre)) {
      this.dataService.deleteTipoEncargado(id).subscribe((res) => {
        alert("Tipo Encargado Borrado!");
        console.log("Tipo Encargado Borrado");
        this.ngOnInit();
      });
    }
  }
}
