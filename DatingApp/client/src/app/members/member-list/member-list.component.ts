import { Component, OnInit } from '@angular/core';
import { Member } from 'app/models/member';
import { MembersService } from 'app/services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members: Member[] = []
  constructor(private membersService: MembersService) { }

  ngOnInit() {
    this.loadMembers();
  }
  loadMembers() {
    this.membersService.getMembers()
      .subscribe(members => {
        this.members = members;
      });
  }
}
