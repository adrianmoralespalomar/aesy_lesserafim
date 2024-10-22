import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:true,
  imports:[NgOptimizedImage]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
