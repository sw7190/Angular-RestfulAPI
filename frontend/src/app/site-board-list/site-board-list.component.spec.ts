import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteBoardListComponent } from './site-board-list.component';

describe('SiteBoardListComponent', () => {
  let component: SiteBoardListComponent;
  let fixture: ComponentFixture<SiteBoardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteBoardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteBoardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
