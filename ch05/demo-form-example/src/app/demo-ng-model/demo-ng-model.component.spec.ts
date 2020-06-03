import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNgModelComponent } from './demo-ng-model.component';

describe('DemoNgModelComponent', () => {
  let component: DemoNgModelComponent;
  let fixture: ComponentFixture<DemoNgModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoNgModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
