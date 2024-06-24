import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUniteComponent } from './edit-unite.component';

describe('EditUniteComponent', () => {
  let component: EditUniteComponent;
  let fixture: ComponentFixture<EditUniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUniteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
