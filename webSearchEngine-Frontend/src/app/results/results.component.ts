import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results = [1,2,3,4,5,6,7,8,9,10];

  constructor() { }

  ngOnInit() {
  }

}
