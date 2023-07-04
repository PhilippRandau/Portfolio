import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedService } from 'src/assets/services/shared.service';
@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {
  constructor(private sharedService: SharedService) {
    window.addEventListener('scroll', this.checkSkillsIconsInView.bind(this));
  }


  icons = ['angular_icon.svg', 'typescript_icon.svg', 'javascript_icon.svg', 'html5_icon.svg', 'firebase_icon.svg', 'git_icon.svg', 'css3_icon.svg', 'scrum_icon.svg', 'material_design_icon.svg'];
  skills = ['Angular', 'Typescript', 'JavaScript', 'HTML', 'Firebase', 'GIT', 'CSS', 'Scrum', 'Material design'];
  @ViewChild('mySkills') mySkillsElement!: ElementRef;
  @ViewChild('skillsIcons', { static: false }) private skillsIconsElement: ElementRef<HTMLDivElement>;
  isSkillsIconsElementScrolledIntoView: boolean;


  checkSkillsIconsInView() {
    this.isSkillsIconsElementScrolledIntoView = this.sharedService.isScrolledIntoView(this.skillsIconsElement, this.isSkillsIconsElementScrolledIntoView);
  }
}
