import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloTentativoComponent } from './titulo-tentativo.component';

describe('TituloTentativoComponent', () => {
  let component: TituloTentativoComponent;
  let fixture: ComponentFixture<TituloTentativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloTentativoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloTentativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
