import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormWithValidatiionsExplicitComponent } from './demo-form-with-validatiions-explicit.component';

describe('DemoFormWithValidatiionsExplicitComponent', () => {
  let component: DemoFormWithValidatiionsExplicitComponent;
  let fixture: ComponentFixture<DemoFormWithValidatiionsExplicitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormWithValidatiionsExplicitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormWithValidatiionsExplicitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
