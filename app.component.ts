import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ReferenceComponent } from './reference/reference.component';
import { TrainingComponent } from './training/training.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonalInfoComponent, EducationComponent, WorkExperienceComponent, TrainingComponent, ReferenceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prelim_lab_2';
}
