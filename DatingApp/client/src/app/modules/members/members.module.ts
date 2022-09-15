import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from 'app/members/member-list/member-list.component';
import { MemberDetailComponent } from 'app/members/member-detail/member-detail.component';
import { Route, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MemberListComponent, pathMatch: 'full' },
  { path: 'id', component: MemberDetailComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MemberListComponent,
    MemberDetailComponent
  ],
  exports: [
    MemberListComponent,
    MemberDetailComponent,
    RouterModule
  ]
})
export class MembersModule { }
