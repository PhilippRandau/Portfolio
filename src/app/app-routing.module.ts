import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: 'about-me-route', component: AboutMeComponent },
  { path: 'my-skills-route', component: MySkillsComponent },
  { path: 'portfolio-route', component: PortfolioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, {
    enableTracing: false,
    anchorScrolling: 'enabled',
    scrollOffset: [
      0,
      104
  ]
  }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
