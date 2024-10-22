import { JsonPipe, NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../models/member-interface';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  standalone:true,
  imports:[JsonPipe,NgOptimizedImage]
})
export class MemberComponent implements OnInit {

  @Input() member?:Member;
  constructor() { }

  ngOnInit() {
  }

}
