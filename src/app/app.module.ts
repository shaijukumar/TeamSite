import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamHomePageComponent } from './team-home-page/team-home-page.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { TeamWelcomeBannerComponent } from './team-welcome-banner/team-welcome-banner.component';
import { TeamAnnouncementsComponent } from './team-announcements/team-announcements.component';
import { TeamMeetingsComponent } from './team-meetings/team-meetings.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamHomePageComponent,
    TeamMembersComponent,
    TeamWelcomeBannerComponent,
    TeamAnnouncementsComponent,
    TeamMeetingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
