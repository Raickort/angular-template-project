import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  projectForm: FormGroup;
  tags: string[];

  constructor(
    private formBuilder: FormBuilder,
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.projectForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      tags: this.formBuilder.array([])
    });
  }

  onSubmitForm() {
    const formValue = this.projectForm.value;
    const newProject = new Project(
      formValue['title'],
      formValue['content'],
      formValue['tags'] ? formValue['tags'] : []
    );
    alert(newProject.title);
    //this.projectService.addProject(newProject);
    //this.router.navigate(['/projects']);
  }

  getTags() {
    return this.projectForm.get('tags') as FormArray;
  }

  onAddHobby() {
    const newTagControl = this.formBuilder.control('', Validators.required);
    this.getTags().push(newTagControl);
  }

  public onSelect(item) {
    console.log('tag selected: value is ' + item);
  }
}
