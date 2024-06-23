import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUnitesComponent } from './all-unites.component';

describe('AllUnitesComponent', () => {
  let component: AllUnitesComponent;
  let fixture: ComponentFixture<AllUnitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUnitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUnitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
