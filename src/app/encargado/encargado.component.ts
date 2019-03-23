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
  public is_hidden = true;
  public is_edit = false;

  encarg = {
    id: null,
    nombre: null,
    telefono: null,
    tipo: null
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getEncargado().subscribe((data) => { this.encargado = data });
    this.dataService.getTipoEncargado().subscribe((data) => { this.tipoEncargado = data });
  }

  mostrarForm(encargado?: Encargado) {
    if (encargado) {
      this.encarg.id = encargado.id;
      this.encarg.nombre = encargado.nombre;
      this.encarg.telefono = encargado.telefono;
      this.encarg.tipo = encargado.tipo;
      this.is_edit = true;
    } else {
      this.encarg.id = null;
      this.encarg.nombre = null;
      this.encarg.telefono = null;
      this.encarg.tipo = null;
      this.is_edit = false;
    }
    this.is_hidden = !this.is_hidden;
  }

  guardarEncargado(is_edit: boolean) {
    if (is_edit) {
      this.dataService.putEncargado(this.encarg.id, this.encarg).subscribe((res) => {
        alert("Encargado Editado!");
        console.log("Encargado Editado");
        this.ngOnInit();
      });
    } else {
      this.dataService.postEncargado(this.encarg).subscribe((res) => {
        alert("Encargado Guardado!");
        console.log("Encargado Creado");
        this.ngOnInit();
      });
    }
  }

  borrarEncargado(id: number, nombre: string) {
    if (confirm("Se eliminara Encargado con el nombre: " + nombre)) {
      this.dataService.deleteEncargado(id).subscribe((res) => {
        alert("Encargado Borrado!");
        console.log("Encargado Borrado");
        this.ngOnInit();
      });
    }
  }

}
