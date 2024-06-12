import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @ViewChild('placeholder') placeholder!: ElementRef;

  isMenuFixed: boolean = false;

  constructor() { }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const placeholderRect = this.placeholder.nativeElement.getBoundingClientRect();
    if (window.scrollY >= placeholderRect.top) {
      this.isMenuFixed = true;
    } else {
      this.isMenuFixed = false;
    }
  }
}
