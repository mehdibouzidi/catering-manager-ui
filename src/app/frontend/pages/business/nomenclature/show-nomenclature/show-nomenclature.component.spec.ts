import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNomenclatureComponent } from './show-nomenclature.component';

describe('ShowNomenclatureComponent', () => {
  let component: ShowNomenclatureComponent;
  let fixture: ComponentFixture<ShowNomenclatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowNomenclatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNomenclatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
