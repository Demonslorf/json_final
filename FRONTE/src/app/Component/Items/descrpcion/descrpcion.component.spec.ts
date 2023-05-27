import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescrpcionComponent } from './descrpcion.component';

describe('DescrpcionComponent', () => {
  let component: DescrpcionComponent;
  let fixture: ComponentFixture<DescrpcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescrpcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescrpcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
