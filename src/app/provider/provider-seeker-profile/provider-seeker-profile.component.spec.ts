import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderSeekerProfileComponent } from './provider-seeker-profile.component';

describe('ProviderSeekerProfileComponent', () => {
  let component: ProviderSeekerProfileComponent;
  let fixture: ComponentFixture<ProviderSeekerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderSeekerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderSeekerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
