import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProSearchbarComponent } from './pro-searchbar.component';

describe('ProSearchbarComponent', () => {
  let component: ProSearchbarComponent;
  let fixture: ComponentFixture<ProSearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProSearchbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
