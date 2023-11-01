import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechadeingresoComponent } from './fechadeingreso.component';

describe('FechadeingresoComponent', () => {
  let component: FechadeingresoComponent;
  let fixture: ComponentFixture<FechadeingresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FechadeingresoComponent]
    });
    fixture = TestBed.createComponent(FechadeingresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
