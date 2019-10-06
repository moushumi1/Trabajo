import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerTransactionComponent } from './seeker-transaction.component';

describe('SeekerTransactionComponent', () => {
  let component: SeekerTransactionComponent;
  let fixture: ComponentFixture<SeekerTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
