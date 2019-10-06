import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerSigninComponent } from './seeker-signin.component';

describe('SeekerSigninComponent', () => {
  let component: SeekerSigninComponent;
  let fixture: ComponentFixture<SeekerSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
