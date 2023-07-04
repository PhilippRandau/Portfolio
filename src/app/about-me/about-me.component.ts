import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedService } from 'src/assets/services/shared.service';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  constructor(private sharedService: SharedService) {
    window.addEventListener('scroll', this.checkSecondPictureInView.bind(this));
  }
  

  @ViewChild('aboutMe') aboutMeElement!: ElementRef;
  @ViewChild('secondPicture', { static: false }) private secondPictureElement: ElementRef<HTMLDivElement>;
  isSecondPictureScrolledIntoView: boolean;


  checkSecondPictureInView() {
    this.isSecondPictureScrolledIntoView = this.sharedService.isScrolledIntoView(this.secondPictureElement, this.isSecondPictureScrolledIntoView);
  }
}
