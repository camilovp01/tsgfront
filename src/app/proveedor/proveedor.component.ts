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
  public is_edit = false;

  provee = {
    id: null,
    nombre: null,
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProveedor().subscribe((data) => { this.proveedor = data });
  }

  mostrarForm(proveedor?: Proveedor) {
    if (proveedor) {
      this.provee.id = proveedor.id
      this.provee.nombre = proveedor.nombre
      this.is_edit = true;
    } else {
      this.provee.id = null;
      this.provee.nombre = null;
      this.is_edit = false;
    }
    this.is_hidden = !this.is_hidden;
  }

  guardarProveedor(is_edit: boolean) {
    if (is_edit) {
      this.dataService.putProveedor(this.provee.id, this.provee).subscribe((res) => {
        alert("Proveedor Editado!");
        console.log("Proveedor Editado");
        this.ngOnInit();
      });
    } else {
      this.dataService.postProveedor(this.provee).subscribe((res) => {
        alert("Proveedor Guardado!");
        console.log("Proveedor Creado");
        this.ngOnInit();
      });
    }

  }

  borrarProveedor(id: number, nombre: string) {
    if (confirm("Se eliminara Proveedor con el nombre: " + nombre)) {
      this.dataService.deleteProveedor(id).subscribe((res) => {
        alert("Proveedor Borrado!");
        console.log("Proveedor Borrado");
        this.ngOnInit();
      });
    }

  }

}
