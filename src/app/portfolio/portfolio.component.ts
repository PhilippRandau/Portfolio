import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  @ViewChild('portfolio') portfolioElement!: ElementRef;
  projects = [
    // {
    //   name: 'Pokédex',
    //   skills: 'JavaScript | HTML | CSS | API',
    //   info: 'A digital platform designed to provide information about different species of Pokémon.',
    //   img: 'sample_portfolio.svg',
    //   github: 'https://github.com/PhilippRandau/Pokedex',
    //   livetest: 'https://philipp-randau.developerakademie.net/Pokedex/index.html'
    // },
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
  ]

  openPage(link:string) {
    window.location.href = link;
  }
}
