import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  @ViewChild('view') plus!: any;
  @ViewChild('hide') minus!: any;
  @ViewChild('text') text!: any;
  @ViewChild('acc') accordion!: any;


  @Input() pharse: string = '';


  onViewHide() {
    console.log(this.accordion.nativeElement);
    if (this.plus.changeDetector._lView[0].className == 'view') {
      this.accordion.nativeElement.style.animation =
        '.5s linear 1s normal forwards expand';
      this.plus.changeDetector._lView[0].removeAttribute('class');
      this.plus.changeDetector._lView[0].setAttribute('class', 'hide');

      this.minus.changeDetector._lView[0].removeAttribute('class');-
      this.minus.changeDetector._lView[0].setAttribute('class', 'view');

      this.text.nativeElement.removeAttribute('class');
      this.text.nativeElement.setAttribute('class', 'text_show');
    } else {
      this.plus.changeDetector._lView[0].removeAttribute('class');
      this.plus.changeDetector._lView[0].setAttribute('class', 'view');

      this.minus.changeDetector._lView[0].removeAttribute('class');
      this.minus.changeDetector._lView[0].setAttribute('class', 'hide');

      this.text.nativeElement.removeAttribute('class');
      this.text.nativeElement.setAttribute('class', 'text');

      this.accordion.nativeElement.style.animation =
        '.5s linear 1s normal both decrease';
    }
  }
}
