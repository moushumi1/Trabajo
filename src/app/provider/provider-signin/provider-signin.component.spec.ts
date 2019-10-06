import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderSigninComponent } from './provider-signin.component';

describe('ProviderSigninComponent', () => {
  let component: ProviderSigninComponent;
  let fixture: ComponentFixture<ProviderSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
