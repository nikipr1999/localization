import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './MyComponents/login/login.component';
import { ProjectsComponent } from './MyComponents/projects/projects.component';
import { ProjectImportComponent } from './MyComponents/project-import/project-import.component';
import { ProjectListComponent } from './MyComponents/project-list/project-list.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'projects',component: ProjectListComponent},
  {path:'projects/import',component: ProjectImportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export class routingComponents = [LoginComponent, ProjectsComponent]
