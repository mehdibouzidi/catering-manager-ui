import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIngredientComponent } from './show-ingredient.component';

describe('ShowIngredientComponent', () => {
  let component: ShowIngredientComponent;
  let fixture: ComponentFixture<ShowIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowIngredientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
