import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateorderComponent } from './estimateorder.component';

describe('EstimateorderComponent', () => {
  let component: EstimateorderComponent;
  let fixture: ComponentFixture<EstimateorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimateorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
