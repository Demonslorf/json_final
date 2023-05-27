import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAnteproyectComponent } from './show-anteproyect.component';

describe('ShowAnteproyectComponent', () => {
  let component: ShowAnteproyectComponent;
  let fixture: ComponentFixture<ShowAnteproyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAnteproyectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAnteproyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
