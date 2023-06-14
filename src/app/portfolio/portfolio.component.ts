import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects = [
    {
      name: 'Pokédex',
      skills: 'JavaScript | HTML | CSS',
      info: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      img: 'sample_portfolio.svg'
    },
    {
      name: 'Pokédex',
      skills: 'JavaScript | HTML | CSS',
      info: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      img: 'sample_portfolio.svg'
    },
    {
      name: 'Pokédex',
      skills: 'JavaScript | HTML | CSS',
      info: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      img: 'sample_portfolio.svg'
    },
  ]

  liveTestProject() {
    window.location.href = "https://philipp-randau.developerakademie.net/Join/index.html"
  }

  githubProject() {
    window.location.href = "https://github.com/PhilippRandau/Join"
  }
}
