import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderTranUpdateComponent } from './provider-tran-update.component';

describe('ProviderTranUpdateComponent', () => {
  let component: ProviderTranUpdateComponent;
  let fixture: ComponentFixture<ProviderTranUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderTranUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderTranUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
