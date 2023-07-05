import { Component, ElementRef, QueryList, ViewChild, ViewChildren, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { SharedService } from 'src/assets/services/shared.service';
@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements AfterViewInit {
  icons = ['angular_icon.svg', 'typescript_icon.svg', 'javascript_icon.svg', 'html5_icon.svg', 'firebase_icon.svg', 'git_icon.svg', 'css3_icon.svg', 'scrum_icon.svg', 'material_design_icon.svg'];
  skills = ['Angular', 'Typescript', 'JavaScript', 'HTML', 'Firebase', 'GIT', 'CSS', 'Scrum', 'Material design'];

  @ViewChild('mySkills') mySkillsElement: ElementRef;
  skillsIconsElementsArray: ElementRef<HTMLDivElement>[] = [];
  isSkillsIconsElementScrolledIntoViewArray: Array<boolean> = [];
  @ViewChildren('skillsIcons') skillsIconsElements: QueryList<ElementRef<HTMLDivElement>>;

  constructor(private sharedService: SharedService, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.skillsIconsElements.forEach((skillsIconElement, index) => {
      this.skillsIconsElementsArray[index] = skillsIconElement;
      this.isSkillsIconsElementScrolledIntoViewArray[index] = false;
    });
    window.addEventListener('scroll', this.checkSkillsIconsInView.bind(this));
    this.cdr.detectChanges(); // Manuell die Change Detection anstoßen
  }

  checkSkillsIconsInView() {
    this.skillsIconsElementsArray.forEach((skillsIconElement, index) => {
      this.isSkillsIconsElementScrolledIntoViewArray[index] = this.sharedService.isScrolledIntoView(skillsIconElement, this.isSkillsIconsElementScrolledIntoViewArray[index]);
    });
  }
}
