import { Component, OnInit } from '@angular/core';
import { Team } from '../team'; 

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams:Team [] = [

  {id:1, name:'John Tito',image:'../assets/img/jjtito.jpg', rank:'Partner'},
  {id:2, name:'Lawyer', image:'../assets/img/lawyer.jpg', rank:'Associate'},
  {id:3, name:'Lawyer', image:'../assets/img/lawyer.jpg', rank:'Associate'},
  {id:4, name:'Lawyer', image:'../assets/img/lawyer.jpg', rank:'Associate'},
  {id:5, name:'Lawyer', image:'../assets/img/lawyer.jpg', rank:'Associate'},
  {id:6, name:'Lawyer', image:'../assets/img/lawyer.jpg', rank:'Associate'},
  {id:7, name:'Lawyer', image:'../assets/img/lawyer.jpg', rank:'Associate'},
  {id:8, name:'Lawyer', image:'../assets/img/lawyer.jpg', rank:'Associate'},
  




  ];

  constructor() { }

  ngOnInit(): void {
  }

}
