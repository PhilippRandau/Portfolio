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
<<<<<<< HEAD
  slideOut = false;
=======
>>>>>>> 6af6012f683f739a2e30b8e72a0e022fb7e95e3c

  public hideAllHighlights() {
    this.highlightAboutMe = false;
    this.highlightMySkills = false;
    this.highlightPortfolio = false;
    this.highlightContact = false;
  }

<<<<<<< HEAD
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
=======
  toggleMenu() {
    this.openMenu = !this.openMenu;
>>>>>>> 6af6012f683f739a2e30b8e72a0e022fb7e95e3c
  }
}

