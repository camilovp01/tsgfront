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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProveedor().subscribe((data) => { this.proveedor = data });
  }

}
