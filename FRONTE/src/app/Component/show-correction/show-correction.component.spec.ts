import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCorrectionComponent } from './show-correction.component';

describe('ShowCorrectionComponent', () => {
  let component: ShowCorrectionComponent;
  let fixture: ComponentFixture<ShowCorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCorrectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
