import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Project } from '../models/project.model';

@Injectable()
export class ProjectService {
  projectSubject = new Subject<any[]>();

  private projects = [];

  constructor(private httpClient: HttpClient) {}

  emitProjectSubject() {
    this.projectSubject.next(this.projects.slice());
  }

  getProjectById(id: number) {
    const project = this.projects.find(projectObject => {
      return projectObject.id === id;
    });
    return project;
  }

  addProject(project: Project) {
    this.projects.push(project);
    this.emitProjectSubject();
  }

  saveProjectsToServer() {
    this.httpClient
      .put(
        'https://angularclassrooms-default-rtdb.europe-west1.firebasedatabase.app/projects.json',
        this.projects
      )
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        error => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getProjectsFromServeur() {
    this.httpClient
      .get<any[]>(
        'https://angularclassrooms-default-rtdb.europe-west1.firebasedatabase.app/projects .json'
      )
      .subscribe(
        response => {
          this.projects = response;
          this.emitProjectSubject();
        },
        error => {
          console.log('Erreur de chargement !' + error);
        }
      );
  }
}
