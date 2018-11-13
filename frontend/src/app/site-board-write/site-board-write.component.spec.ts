import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteBoardWriteComponent } from './site-board-write.component';

describe('SiteBoardWriteComponent', () => {
  let component: SiteBoardWriteComponent;
  let fixture: ComponentFixture<SiteBoardWriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteBoardWriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteBoardWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
