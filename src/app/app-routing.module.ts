import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './MyComponents/login/login.component';
import { ProjectsComponent } from './MyComponents/projects/projects.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'projects',component: ProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export class routingComponents = [LoginComponent, ProjectsComponent]
