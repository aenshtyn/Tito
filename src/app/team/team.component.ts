import { Component, OnInit } from '@angular/core';
import { Team } from '../team'; 

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams:Team [] = [

  {id:1, name:'John Tito'},
  {id:2, name:'Mohamed Abdullahi'},




  ];

  constructor() { }

  ngOnInit(): void {
  }

}
