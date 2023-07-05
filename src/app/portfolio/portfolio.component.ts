import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { SharedService } from 'src/assets/services/shared.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements AfterViewInit {
  constructor(private sharedService: SharedService) {
    window.addEventListener('scroll', this.checkPortfolioInView.bind(this));
  }

  @ViewChildren('projects') projectElements: QueryList<ElementRef<HTMLDivElement>>;
  projectElementsArray: ElementRef<HTMLDivElement>[] = [];
  isProjectsElementScrolledIntoViewArray: Array<boolean> = [];
  @ViewChild('portfolio') portfolioElement!: ElementRef;

  projects = [
    {
      name: 'Join',
      skills: 'JavaScript | HTML | CSS',
      info: 'Join is a feature-rich project management tool that combines the power of drag and drop task management with the intuitive Kanban system, allowing users to effortlessly create, organize, and track tasks. With seamless task movement and efficient contact management, Join enhances collaboration and streamlines project workflows.',
      img: 'join_portfolio.png',
      github: 'https://github.com/PhilippRandau/Join',
      livetest: 'https://philipp-randau.developerakademie.net/Join/index.html'
    },
    {
      name: 'Youkai Rage',
      skills: 'JavaScript | HTML | CSS',
      info: 'Youkai Rage is an exhilarating sidescroller JavaScript 2D game where players control a trapped youkai in a bottle, fighting against robot-controlled workers to protect the planet and restore peace, featuring fast-paced gameplay and captivating visuals.',
      img: 'youkai_portfolio.png',
      github: 'https://github.com/PhilippRandau/YoukaiRage',
      livetest: 'https://philipp-randau.developerakademie.net/YoukaiRage/index.html'
    },
  ];

  ngAfterViewInit() {
    this.projectElements.forEach((projectsElement, index) => {
      this.projectElementsArray[index] = projectsElement;
      this.isProjectsElementScrolledIntoViewArray[index] = false;
    });
  }

  checkPortfolioInView() {
    this.projectElementsArray.forEach((ProjectElement, index) => {
      if (!this.isProjectsElementScrolledIntoViewArray[index]) {
        this.isProjectsElementScrolledIntoViewArray[index] = this.sharedService.isScrolledIntoView(ProjectElement, this.isProjectsElementScrolledIntoViewArray[index]);
      }
    });
  }

  getAnimationClass(index: number): string {
    if (this.isProjectsElementScrolledIntoViewArray[index]) {
      if (index % 2 === 0) {
        return 'slideInLeft';
      } else {
        return 'slideInRight';
      }
    } else {
      return '';
    }
  }
}
