import { Component, OnInit } from '@angular/core';
import { Project } from '../../Project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects : Project[];
  segmentedprojects : Array<Project[]>=[];
  constructor() {
    this.projects = [
      {
        type : "App",
        name : "Electrician",
        country: 10,
      },
      {
        type : "App",
        name : "Retailer",
        country : 10,
      },
      
      {
        type : "App",
        name : "Electrician",
        country: 10,
      },
      {
        type : "App",
        name : "Retailer",
        country : 10,
      },
      {
        type : "App",
        name : "InsightMobile",
        country : 10,
      },
      {
        type : "App",
        name : "RL",
        country : 10,
      },
      {
        type : "App",
        name : "CMEE/CEE",
        country : 10,
      },
      {
        type : "App",
        name : "Electrician",
        country : 10,
      }
     ]
     let tempprojects;
    tempprojects = this.projects;
    for(var i=0;i<=tempprojects.length-1;i+=3)
    {
      this.segmentedprojects.push(tempprojects.slice(i,i+3));
    }
   }

  ngOnInit(): void {
  }

}
