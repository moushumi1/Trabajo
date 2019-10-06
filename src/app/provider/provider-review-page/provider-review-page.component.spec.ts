import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderReviewPageComponent } from './provider-review-page.component';

describe('ProviderReviewPageComponent', () => {
  let component: ProviderReviewPageComponent;
  let fixture: ComponentFixture<ProviderReviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderReviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderReviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
