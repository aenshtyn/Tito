import { Component, OnInit } from '@angular/core';
import { Expertise } from '../expertise';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent implements OnInit {

  expertises:Expertise[] = [
    {id:1, name:'Aviation Law'},
    {id:2, name:'Alternative Dispute Resolution'},
    {id:3, name:'Banking, Finance & Securities Law'},
    {id:4, name:'Construction & Engineering'},
    {id:5, name:'Commercial Law - General'}, 
    {id:6, name:'Corporate Law'},
    {id:7, name:'Regional & International Law'},
    {id:8, name:'Property, Conveyancing, Land Landlord & Tenant Law'},
  ];


  constructor() {}

  ngOnInit(): void {
  }

}
