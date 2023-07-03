import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  @ViewChild('aboutMe') aboutMeElement!: ElementRef;
  @ViewChild('secondPicture', {static: false}) private secondPictureElement: ElementRef<HTMLDivElement>;
  isSecondPictureScrolledIntoView: boolean;

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView(){
    if (this.secondPictureElement){
      const rect = this.secondPictureElement.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      this.isSecondPictureScrolledIntoView = topShown && bottomShown;
    }
  }
}
