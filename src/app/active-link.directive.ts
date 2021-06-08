import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appActiveLink]'
})
export class ActiveLinkDirective {

  constructor(private el: ElementRef) { }
  @HostListener('focus') onMouseEnter() {
    this.highlight('#009EE2', '#ffffff');
  }

  @HostListener('blur') onMouseLeave() {
    this.highlight('', '');
  }

  private highlight(color: string, fontColor: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.color = fontColor;
  }

}
