import { Component, OnInit } from '@angular/core';
import { Team } from '../team'; 

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams:Team [] = [

  {id:1, name:'John Tito',image:'../assets/img/jjtito.jpg'},
  {id:2, name:'Mohamed Abdullahi', image:'../assets/img/moha.jpg'},




  ];

  constructor() { }

  ngOnInit(): void {
  }

}
