import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFamillesComponent } from './all-familles.component';

describe('AllFamillesComponent', () => {
  let component: AllFamillesComponent;
  let fixture: ComponentFixture<AllFamillesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFamillesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFamillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
