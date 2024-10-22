import { Injectable } from '@angular/core';
import { Member } from '../models/member-interface';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor() {}
  getMembersData():Member[]{
    return [
      {
        name:'Sakura',
        birth:'1998-03-19',
        height:163,
        country:'Japan',
        src:'sakura.webp'
      },
      {
        name:'Chaewon',
        birth:'2000-08-01',
        height:163,
        country:'Korea',
        src:'chaewon.webp'
      },
      {
        name:'Yunjin',
        birth:'2001-10-08',
        height:172,
        country:'Korea',
        src:'yunjin.webp'
      },
      {
        name:'Kazuha',
        birth:'2003-08-09',
        height:170,
        country:'Japan',
        src:'kazuha.webp'
      },
      {
        name:'Eunchae',
        birth:'2006-11-10',
        height:170,
        country:'Korea',
        src:'eunchae.webp'
      }
    ]
  }

}
