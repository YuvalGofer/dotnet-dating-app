import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MembersDetailComponent } from './members/members-detail/members-detail.component';
import { MembersListComponent } from './members/members-list/members-list.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'members',//localhost:4200/members
    component: MembersListComponent
  },
  {
    path: 'members/:id',//localhost:4200/members/1
    component: MembersDetailComponent,
  },
  {
    path: 'lists',
    component: ListsComponent,
  },
  {
    path: 'messages',
    component: MessagesComponent,
  },
  {
    path:'**',
    component: HomeComponent,
    pathMatch:'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
