import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarVentasComponent } from './mostrar-ventas.component';

describe('MostaVentasComponent', () => {
  let component: MostrarVentasComponent;
  let fixture: ComponentFixture<MostrarVentasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarVentasComponent]
    });
    fixture = TestBed.createComponent(MostrarVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
