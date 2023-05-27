import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnteproyectComponent } from './create-anteproyect.component';

describe('CreateAnteproyectComponent', () => {
  let component: CreateAnteproyectComponent;
  let fixture: ComponentFixture<CreateAnteproyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAnteproyectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAnteproyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
