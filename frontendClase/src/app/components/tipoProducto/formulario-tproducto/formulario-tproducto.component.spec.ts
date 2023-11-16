import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTproductoComponent } from './formulario-tproducto.component';

describe('FormularioTproductoComponent', () => {
  let component: FormularioTproductoComponent;
  let fixture: ComponentFixture<FormularioTproductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioTproductoComponent]
    });
    fixture = TestBed.createComponent(FormularioTproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
