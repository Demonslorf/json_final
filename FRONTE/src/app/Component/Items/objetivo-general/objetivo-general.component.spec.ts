import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivoGeneralComponent } from './objetivo-general.component';

describe('ObjetivoGeneralComponent', () => {
  let component: ObjetivoGeneralComponent;
  let fixture: ComponentFixture<ObjetivoGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjetivoGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjetivoGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
