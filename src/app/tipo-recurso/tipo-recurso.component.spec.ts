import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoRecursoComponent } from './tipo-recurso.component';

describe('TipoRecursoComponent', () => {
  let component: TipoRecursoComponent;
  let fixture: ComponentFixture<TipoRecursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoRecursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoRecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
