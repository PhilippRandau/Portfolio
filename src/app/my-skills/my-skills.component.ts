import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {
  icons = ['angular_icon.svg', 'typescript_icon.svg', 'javascript_icon.svg', 'html5_icon.svg', 'firebase_icon.svg', 'git_icon.svg', 'css3_icon.svg', 'scrum_icon.svg', 'material_design_icon.svg']
  skills = ['Angular', 'Typescript', 'JavaScript', 'HTML', 'Firebase', 'GIT', 'CSS', 'Scrum', 'Material design']
}
