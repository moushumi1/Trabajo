import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerViewProComponent } from './seeker-view-pro.component';

describe('SeekerViewProComponent', () => {
  let component: SeekerViewProComponent;
  let fixture: ComponentFixture<SeekerViewProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerViewProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerViewProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
