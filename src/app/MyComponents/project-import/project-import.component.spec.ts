import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectImportComponent } from './project-import.component';

describe('ProjectImportComponent', () => {
  let component: ProjectImportComponent;
  let fixture: ComponentFixture<ProjectImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
