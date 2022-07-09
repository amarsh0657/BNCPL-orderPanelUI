import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOrderComponent } from './type-order.component';

describe('TypeOrderComponent', () => {
  let component: TypeOrderComponent;
  let fixture: ComponentFixture<TypeOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
