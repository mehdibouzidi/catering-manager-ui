import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNomenclaturesComponent } from './all-nomenclatures.component';

describe('AllNomenclaturesComponent', () => {
  let component: AllNomenclaturesComponent;
  let fixture: ComponentFixture<AllNomenclaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllNomenclaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllNomenclaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
