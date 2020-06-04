import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceServiceDemoComponent } from './price-service-demo.component';

describe('PriceServiceDemoComponent', () => {
  let component: PriceServiceDemoComponent;
  let fixture: ComponentFixture<PriceServiceDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceServiceDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceServiceDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
