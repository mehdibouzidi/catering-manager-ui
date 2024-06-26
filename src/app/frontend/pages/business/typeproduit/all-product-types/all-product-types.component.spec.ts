import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductTypesComponent } from './all-product-types.component';

describe('AllProductTypesComponent', () => {
  let component: AllProductTypesComponent;
  let fixture: ComponentFixture<AllProductTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProductTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProductTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
