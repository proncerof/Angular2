import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighLighttext]'
})
export class HighLighttextDirective {

  private el:ElementRef;
  constructor(el:ElementRef) { 
    this.el = el;
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.backgroundColor = 'blue';
  }
  
  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.backgroundColor = '';
    }

}
