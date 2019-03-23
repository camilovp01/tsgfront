import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Proveedor } from './proveedor.model';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  public proveedor: Proveedor[];
  public titlulo = "Lista de Proveedores";
  public is_hidden = true;

  provee = {
    nombre: null,
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProveedor().subscribe((data) => { this.proveedor = data });
  }

  mostrarForm() {
    this.is_hidden = !this.is_hidden;
  }

  guardarProveedor() {
    this.dataService.postProveedor(this.provee).subscribe((res) => {
      alert("Proveedor Guardado!");
      console.log("Proveedor Creado");
      this.ngOnInit();
    });

  }

}
