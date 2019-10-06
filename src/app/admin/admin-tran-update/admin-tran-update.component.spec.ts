import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTranUpdateComponent } from './admin-tran-update.component';

describe('AdminTranUpdateComponent', () => {
  let component: AdminTranUpdateComponent;
  let fixture: ComponentFixture<AdminTranUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTranUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTranUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
