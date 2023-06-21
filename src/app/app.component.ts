import { Component, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component'
import { ContactComponent } from './contact/contact.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Portfolio';

  @ViewChild(AboutMeComponent) aboutMeComponent!: AboutMeComponent;
  @ViewChild(MySkillsComponent) mySkillsComponent!: MySkillsComponent;
  @ViewChild(PortfolioComponent) portfolioComponent!: PortfolioComponent;
  @ViewChild(HeaderMenuComponent) headerMenuComponent!: HeaderMenuComponent;
  @ViewChild(ContactComponent) contactComponent!: ContactComponent;

  public aboutMeOffset: number = null;
  public mySkillsOffset: number = null;
  public portfolioOffset: number = null;
  private headerOffset: number = 110;
  public contactOffset: number = null;

  ngAfterViewInit() {
    this.aboutMeOffset = this.aboutMeComponent.aboutMeElement.nativeElement.offsetTop - this.headerOffset;
    this.mySkillsOffset = this.mySkillsComponent.mySkillsElement.nativeElement.offsetTop;
    this.portfolioOffset = this.portfolioComponent.portfolioElement.nativeElement.offsetTop;
    this.contactOffset = this.contactComponent.contactElement.nativeElement.offsetTop;
  }

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    this.headerMenuComponent.hideAllHighlights();
    
    if (window.scrollY >= this.aboutMeOffset - this.headerOffset && window.scrollY < this.mySkillsOffset) {
      this.headerMenuComponent.highlightAboutMe = true;
    } else if (window.scrollY >= this.mySkillsOffset && window.scrollY < this.portfolioOffset) {
      this.headerMenuComponent.highlightMySkills = true;
    } else if (window.scrollY >= this.portfolioOffset && window.scrollY < this.contactOffset) {
      this.headerMenuComponent.highlightPortfolio = true;
    } else {
      this.headerMenuComponent.hideAllHighlights();
    }
  }
}
