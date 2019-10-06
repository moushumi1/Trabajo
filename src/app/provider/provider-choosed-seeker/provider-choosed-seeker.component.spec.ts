import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderChoosedSeekerComponent } from './provider-choosed-seeker.component';

describe('ProviderChoosedSeekerComponent', () => {
  let component: ProviderChoosedSeekerComponent;
  let fixture: ComponentFixture<ProviderChoosedSeekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderChoosedSeekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderChoosedSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
