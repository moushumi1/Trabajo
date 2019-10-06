import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerSidebarComponent } from './seeker-sidebar.component';

describe('SeekerSidebarComponent', () => {
  let component: SeekerSidebarComponent;
  let fixture: ComponentFixture<SeekerSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
