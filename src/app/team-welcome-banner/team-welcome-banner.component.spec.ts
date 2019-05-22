import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamWelcomeBannerComponent } from './team-welcome-banner.component';

describe('TeamWelcomeBannerComponent', () => {
  let component: TeamWelcomeBannerComponent;
  let fixture: ComponentFixture<TeamWelcomeBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamWelcomeBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamWelcomeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
