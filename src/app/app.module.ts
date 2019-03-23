import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecursoComponent } from './recurso/recurso.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { TipoRecursoComponent } from './tipo-recurso/tipo-recurso.component';
import { EncargadoComponent } from './encargado/encargado.component';
import { TipoEncargadoComponent } from './tipo-encargado/tipo-encargado.component';

@NgModule({
  declarations: [
    AppComponent,
    RecursoComponent,
    ProveedorComponent,
    TipoRecursoComponent,
    EncargadoComponent,
    TipoEncargadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
