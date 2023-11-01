import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreComponent } from './nombre.component';

describe('NombreComponent', () => {
  let component: NombreComponent;
  let fixture: ComponentFixture<NombreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NombreComponent]
    });
    fixture = TestBed.createComponent(NombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
