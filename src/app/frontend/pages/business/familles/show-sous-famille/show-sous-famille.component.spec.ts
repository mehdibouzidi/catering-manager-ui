import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSousFamilleComponent } from './show-sous-famille.component';

describe('ShowSousFamilleComponent', () => {
  let component: ShowSousFamilleComponent;
  let fixture: ComponentFixture<ShowSousFamilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSousFamilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSousFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
