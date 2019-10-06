import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerChoosingPageComponent } from './seeker-choosing-page.component';

describe('SeekerChoosingPageComponent', () => {
  let component: SeekerChoosingPageComponent;
  let fixture: ComponentFixture<SeekerChoosingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerChoosingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerChoosingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
