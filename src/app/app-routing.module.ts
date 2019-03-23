import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecursoComponent } from './recurso/recurso.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { EncargadoComponent } from './encargado/encargado.component';
import { TipoRecursoComponent } from './tipo-recurso/tipo-recurso.component';
import { TipoEncargadoComponent } from './tipo-encargado/tipo-encargado.component';

const routes: Routes = [
  { path: 'recurso', component: RecursoComponent },
  { path: 'proveedor', component: ProveedorComponent },
  { path: 'encargado', component: EncargadoComponent },
  { path: 'tipo_recurso', component: TipoRecursoComponent },
  { path: 'tipo_encargado', component: TipoEncargadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
