import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';



const routes: Routes = [

  { path: 'home', component: HomeComponent},
  { path: 'expertise', component: ExpertiseComponent},
  { path: 'team', component:TeamComponent},
  { path: 'contact', component:ContactComponent},

  { path: '', redirectTo:"/home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
