import { Component, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component'
import { ContactComponent } from '../contact/contact.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild(AboutMeComponent) aboutMeComponent!: AboutMeComponent;
  @ViewChild(MySkillsComponent) mySkillsComponent!: MySkillsComponent;
  @ViewChild(PortfolioComponent) portfolioComponent!: PortfolioComponent;
  @ViewChild(HeaderMenuComponent) headerMenuComponent!: HeaderMenuComponent;
  @ViewChild(ContactComponent) contactComponent!: ContactComponent;

  public aboutMeOffset: number = null;
  public mySkillsOffset: number = null;
  public portfolioOffset: number = null;
  public contactOffset: number = null;
  private headerOffset: number = 300;

  ngAfterViewInit() {
    this.aboutMeOffset = this.aboutMeComponent.aboutMeElement.nativeElement.offsetTop - this.headerOffset;
    this.mySkillsOffset = this.mySkillsComponent.mySkillsElement.nativeElement.offsetTop - this.headerOffset;
    this.portfolioOffset = this.portfolioComponent.portfolioElement.nativeElement.offsetTop - this.headerOffset;
    this.contactOffset = this.contactComponent.contactElement.nativeElement.offsetTop - this.headerOffset;
  }

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    this.ngAfterViewInit();
    this.headerMenuComponent.hideAllHighlights();
    
    if (window.scrollY >= this.aboutMeOffset && window.scrollY < this.mySkillsOffset) {
      this.headerMenuComponent.highlightAboutMe = true;
    } else if (window.scrollY >= this.mySkillsOffset && window.scrollY < this.portfolioOffset) {
      this.headerMenuComponent.highlightMySkills = true;
    } else if (window.scrollY >= this.portfolioOffset && window.scrollY < this.contactOffset) {
      this.headerMenuComponent.highlightPortfolio = true;
    } else if (window.scrollY >= this.contactOffset) {
      this.headerMenuComponent.highlightContact = true;
    } else {
      this.headerMenuComponent.hideAllHighlights();
    }
  }
}
