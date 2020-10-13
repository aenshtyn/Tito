import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { ClientComponent } from './client/client.component';



const routes: Routes = [

  { path: 'home', component: HomeComponent},
  { path: 'expertise', component: ExpertiseComponent},
  { path: 'team', component:TeamComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'about', component:AboutComponent},
  {path: 'client', component:ClientComponent},

  { path: '', redirectTo:"/home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
