import { Component } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent {
  highlightAboutMe = false;
  highlightMySkills = false;
  highlightPortfolio = false;
  highlightContact = false;
  openMenu = false;

  public hideAllHighlights() {
    this.highlightAboutMe = false;
    this.highlightMySkills = false;
    this.highlightPortfolio = false;
    this.highlightContact = false;
  }

  toggleMenu() {
    this.openMenu = !this.openMenu;
  }
}

