import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProjectListComponent } from '../project-list/project-list.component';
import { ProjectService } from '../services/project.service';
import { ProjectFormComponent } from '../project-form/project-form.component';
import { SingleProjectComponent } from '../single-project/single-project.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from '../project/project.component';
import { HttpClientModule } from '@angular/common/http';

import { TagInputModule } from 'ngx-chips';

const appRoutes: Routes = [
  { path: 'projects', component: ProjectListComponent },
  { path: 'projects/view/:id', component: SingleProjectComponent },
  { path: 'projects/new', component: ProjectFormComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TagInputModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectListComponent,
    ProjectFormComponent,
    SingleProjectComponent,
    SearchBarComponent
  ],
  bootstrap: [AppComponent],
  providers: [ProjectService]
})
export class AppModule {}
