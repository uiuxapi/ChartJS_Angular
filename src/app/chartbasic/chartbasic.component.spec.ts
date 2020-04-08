import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartbasicComponent } from './chartbasic.component';

describe('ChartbasicComponent', () => {
  let component: ChartbasicComponent;
  let fixture: ComponentFixture<ChartbasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartbasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartbasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
