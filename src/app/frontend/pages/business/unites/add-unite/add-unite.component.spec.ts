import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUniteComponent } from './add-unite.component';

describe('AddUniteComponent', () => {
  let component: AddUniteComponent;
  let fixture: ComponentFixture<AddUniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUniteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
