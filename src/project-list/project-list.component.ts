import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  displayPreference: string;
  projects: Project[];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {}

  onSave() {
    this.projectService.saveProjectsToServer();
  }

  onFetch() {
    this.projectService.getProjectsFromServeur();
  }
}
