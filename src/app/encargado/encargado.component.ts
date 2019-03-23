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

  encarg = {
    nombre: null,
    telefono: null,
    tipo: null
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getEncargado().subscribe((data) => { this.encargado = data });
    this.dataService.getTipoEncargado().subscribe((data) => { this.tipoEncargado = data });
  }

  mostrarForm() {
    this.is_hidden = !this.is_hidden;
  }

  guardarEncargado() {
    this.dataService.postEncargado(this.encarg).subscribe((res) => {
      alert("Encargado Guardado!");
      console.log("Encargado Creado");
      this.ngOnInit();
    });

  }

}
