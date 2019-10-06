import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProChoosedComponent } from './admin-pro-choosed.component';

describe('AdminProChoosedComponent', () => {
  let component: AdminProChoosedComponent;
  let fixture: ComponentFixture<AdminProChoosedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProChoosedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProChoosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
