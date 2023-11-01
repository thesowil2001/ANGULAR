import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionesComponent } from './direccion.component';

describe('DireccionComponent', () => {
  let component: DireccionesComponent;
  let fixture: ComponentFixture<DireccionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DireccionesComponent]
    });
    fixture = TestBed.createComponent(DireccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
