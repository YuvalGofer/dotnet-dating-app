import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from 'app/members/member-list/member-list.component';
import { MemberDetailComponent } from 'app/members/member-detail/member-detail.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { MemberCardComponent } from 'app/members/member-card/member-card.component';

const routes: Routes = [
  { path: '', component: MemberListComponent, pathMatch: 'full' },
  { path: 'username', component: MemberDetailComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MemberListComponent,
    MemberDetailComponent,
    MemberCardComponent
  ],
  exports: [
    MemberListComponent,
    MemberDetailComponent,
    MemberCardComponent,
    RouterModule
  ]
})
export class MembersModule { }
