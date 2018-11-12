import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLoginFormComponent } from './site-login-form.component';

describe('SiteLoginFormComponent', () => {
  let component: SiteLoginFormComponent;
  let fixture: ComponentFixture<SiteLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteLoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
