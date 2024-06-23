import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSousFamilleComponent } from './add-sous-famille.component';

describe('AddSousFamilleComponent', () => {
  let component: AddSousFamilleComponent;
  let fixture: ComponentFixture<AddSousFamilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSousFamilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSousFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
