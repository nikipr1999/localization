import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-import',
  templateUrl: './project-import.component.html',
  styleUrls: ['./project-import.component.css']
})
export class ProjectImportComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }
  openForm(): void {
    document.getElementById("FileUpload")!.style.display = "block";
  }
  
  closeForm():void {
    document.getElementById("FileUpload")!.style.display = "none";
  }
}
