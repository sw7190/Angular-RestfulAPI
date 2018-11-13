import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteBoardViewComponent } from './site-board-view.component';

describe('SiteBoardViewComponent', () => {
  let component: SiteBoardViewComponent;
  let fixture: ComponentFixture<SiteBoardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteBoardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteBoardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
