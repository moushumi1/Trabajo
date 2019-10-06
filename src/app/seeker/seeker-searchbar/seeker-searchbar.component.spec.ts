import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerSearchbarComponent } from './seeker-searchbar.component';

describe('SeekerSearchbarComponent', () => {
  let component: SeekerSearchbarComponent;
  let fixture: ComponentFixture<SeekerSearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerSearchbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
