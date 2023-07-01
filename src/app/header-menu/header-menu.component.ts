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
  slideOut = false;

  public hideAllHighlights() {
    this.highlightAboutMe = false;
    this.highlightMySkills = false;
    this.highlightPortfolio = false;
    this.highlightContact = false;
  }

  delayCloseMenu() {
    setTimeout(() => {
      this.toggleMenu();
    }, 800);
  }

  toggleMenu() {
    if (this.openMenu) {
      this.slideOut = true;
      setTimeout(() => {
        this.openMenu = !this.openMenu;
      }, 800);
    } else {
      this.slideOut = false;
      this.openMenu = !this.openMenu;
    }
  }
}

