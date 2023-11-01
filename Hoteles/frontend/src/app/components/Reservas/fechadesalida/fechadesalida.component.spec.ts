import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechadesalidaComponent } from './fechadesalida.component';

describe('FechadesalidaComponent', () => {
  let component: FechadesalidaComponent;
  let fixture: ComponentFixture<FechadesalidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FechadesalidaComponent]
    });
    fixture = TestBed.createComponent(FechadesalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
