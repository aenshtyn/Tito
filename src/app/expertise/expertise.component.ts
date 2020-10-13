import { Component, OnInit } from '@angular/core';
import { Expertise } from '../expertise';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent implements OnInit {

  expertises:Expertise[] = [
    {id:1, name:'Aviation Law', image:'../assets/img/law.jpg'},
    {id:2, name:'Alternative Dispute Resolution', image:'../assets/img/alternate.jpg'},
    {id:3, name:'Banking, Finance & Securities Law', image:'https://www.otadvocates.co.ke/wp-content/uploads/2018/02/banking_law.jpg'},
    {id:4, name:'Construction & Engineering', image:'https://www.sigamaattorneys.co.za/images/51090900.jpg'},
    {id:5, name:'Commercial Law - General',image:'https://thumbs.dreamstime.com/b/gavel-name-plate-engraving-commercial-law-162112704.jpg'}, 
    {id:6, name:'Corporate Law', image:'https://thelegalnexus.com/wp-content/uploads/2020/03/corporate-law.jpg'},
    {id:7, name:'Regional & International Law', image:'../assets/img/law.jpg'},
    {id:8, name:'Property, Conveyancing, Land Landlord & Tenant Law', image:'../assets/img/law.jpg'},
  ];


  constructor() {}

  ngOnInit(): void {
  }

}
