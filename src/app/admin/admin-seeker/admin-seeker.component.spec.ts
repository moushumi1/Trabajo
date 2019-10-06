import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSeekerComponent } from './admin-seeker.component';

describe('AdminSeekerComponent', () => {
  let component: AdminSeekerComponent;
  let fixture: ComponentFixture<AdminSeekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSeekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
