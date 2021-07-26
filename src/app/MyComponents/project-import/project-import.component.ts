import { Component, Input, OnInit } from '@angular/core';
import { ProjectStrings } from 'src/app/Project';

@Component({
  selector: 'app-project-import',
  templateUrl: './project-import.component.html',
  styleUrls: ['./project-import.component.css']
})
export class ProjectImportComponent implements OnInit {

  public projectstrings: ProjectStrings;
  excel_file_exists=false;
  edit_mode_on=false;

  constructor () {
    this.projectstrings = new ProjectStrings();
    this.projectstrings.keywords = ['nav_Product','nav_Product','nav_Product','nav_Product','nav_Product'];
    this.projectstrings.languages = ['English','Hindi','Arabic','Korean'];
    this.projectstrings.strings = [
      ['Hello','नमस्ते','مرحبا','안녕하세요'],
      ['Hello','नमस्ते','مرحبا','안녕하세요'],
      ['Hello','नमस्ते','مرحبا','안녕하세요'],
      ['Hello','नमस्ते','مرحبا','안녕하세요'],
      ['Hello','नमस्ते','مرحبا','안녕하세요']
    ];
  }

  ngOnInit(): void {
  }
  openForm(): void {
    document.getElementById("FileUpload")!.style.display = "block";
  }
  // upload translation file
  closeForm():void {
    document.getElementById("FileUpload")!.style.display = "none";
  }
}
