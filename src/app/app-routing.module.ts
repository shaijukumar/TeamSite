import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamHomePageComponent } from './team-home-page/team-home-page.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { TeamWelcomeBannerComponent } from './team-welcome-banner/team-welcome-banner.component';
import { TeamAnnouncementsComponent } from './team-announcements/team-announcements.component';
import { TeamMeetingsComponent } from './team-meetings/team-meetings.component';
//import { Component } from './team-';


const routes: Routes = [
  { path: '', component: TeamHomePageComponent },
  { path: 'TeamWelcomeBanner', component: TeamWelcomeBannerComponent },
  { path: 'TeamAnnouncements', component: TeamAnnouncementsComponent },
  { path: 'TeamMeetings', component: TeamMeetingsComponent },
  //{ path: 'TeamWelcomeBanner', component: Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
