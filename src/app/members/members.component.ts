import { Component, OnInit, inject } from '@angular/core';
import { MemberComponent } from './member/member.component';
import { Member } from './models/member-interface';
import { MembersService } from './services/members-service.service';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  standalone:true,
  imports:[MemberComponent]
})
export class MembersComponent implements OnInit {
  membersService = inject(MembersService);
  members:Member[]=[];
  viewScroller = inject(ViewportScroller)
  constructor() { }
  ngOnInit() {
    this.members=this.membersService.getMembersData();
  }
  scrollToSection(sectionId: string): void {
    document.querySelector('#'+sectionId)?.scrollIntoView({behavior:'smooth'})
  }
}
