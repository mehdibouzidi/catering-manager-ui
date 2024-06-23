import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSousFamilleComponent } from './edit-sous-famille.component';

describe('EditSousFamilleComponent', () => {
  let component: EditSousFamilleComponent;
  let fixture: ComponentFixture<EditSousFamilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSousFamilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSousFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
