import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  isScrolledIntoView(element, isElementScrolledIntoView) {
    if (element) {
      const rect = element.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      let bottomShown;
      if (window.innerHeight - 110 <= rect.height) {
        bottomShown = rect.bottom - rect.height <= window.innerHeight;
      } else {
        bottomShown = rect.bottom <= window.innerHeight;
      }
      isElementScrolledIntoView = topShown && bottomShown;
      return isElementScrolledIntoView;
    }
  }
}