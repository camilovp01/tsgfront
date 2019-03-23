import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEncargadoComponent } from './tipo-encargado.component';

describe('TipoEncargadoComponent', () => {
  let component: TipoEncargadoComponent;
  let fixture: ComponentFixture<TipoEncargadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoEncargadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEncargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
