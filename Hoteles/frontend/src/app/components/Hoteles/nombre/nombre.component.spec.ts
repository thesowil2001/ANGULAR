import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombresComponent } from './nombre.component';

describe('NombreComponent', () => {
  let component: NombresComponent;
  let fixture: ComponentFixture<NombresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NombresComponent]
    });
    fixture = TestBed.createComponent(NombresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
