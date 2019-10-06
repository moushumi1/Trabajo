import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerUpdateProComponent } from './seeker-update-pro.component';

describe('SeekerUpdateProComponent', () => {
  let component: SeekerUpdateProComponent;
  let fixture: ComponentFixture<SeekerUpdateProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerUpdateProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerUpdateProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
