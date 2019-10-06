import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerTranUpdateComponent } from './seeker-tran-update.component';

describe('SeekerTranUpdateComponent', () => {
  let component: SeekerTranUpdateComponent;
  let fixture: ComponentFixture<SeekerTranUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerTranUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerTranUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
