import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderUpdateProfileComponent } from './provider-update-profile.component';

describe('ProviderUpdateProfileComponent', () => {
  let component: ProviderUpdateProfileComponent;
  let fixture: ComponentFixture<ProviderUpdateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderUpdateProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
