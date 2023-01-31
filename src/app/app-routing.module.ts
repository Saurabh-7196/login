import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { AboutComponent } from './components/about/about.component';
import { AdminDashComponent } from './components/admin-dash/admin-dash.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},

  {path:'',redirectTo:'/login',pathMatch:'full'},//if there is no path redirect to login
  {path:'admin-dash',component:AdminDashComponent,children:[
    {path:'apicall',component:ApiComponent},
    {path:'contact',component:ContactComponent},
    {path:'about',component:AboutComponent},
  ]},
  {path:'**',component:PageNotFoundComponent}//if worng url is there then show this one
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
