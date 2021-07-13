import { Component, OnInit, Input } from '@angular/core';
import { ProjectStrings } from 'src/app/Project';

@Component({
  selector: 'app-string-table',
  templateUrl: './string-table.component.html',
  styleUrls: ['./string-table.component.css']

})
export class StringTableComponent implements OnInit {


  public projectstrings: ProjectStrings;
  @Input() edit_mode : edit_mode_on;
  ngOnInit(): void {
  }

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
  
}
