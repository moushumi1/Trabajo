import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PViewProfileComponent } from './p-view-profile.component';

describe('PViewProfileComponent', () => {
  let component: PViewProfileComponent;
  let fixture: ComponentFixture<PViewProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PViewProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
