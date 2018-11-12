import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteJoinFormComponent } from './site-join-form.component';

describe('SiteJoinFormComponent', () => {
  let component: SiteJoinFormComponent;
  let fixture: ComponentFixture<SiteJoinFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteJoinFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteJoinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
