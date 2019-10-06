import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerChoosedListComponent } from './seeker-choosed-list.component';

describe('SeekerChoosedListComponent', () => {
  let component: SeekerChoosedListComponent;
  let fixture: ComponentFixture<SeekerChoosedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerChoosedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerChoosedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
