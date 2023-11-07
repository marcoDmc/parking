import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-help-home-page',
  templateUrl: './help-home-page.component.html',
  styleUrls: ['./help-home-page.component.scss'],
})
export class HelpHomePageComponent {
  text1: string = 'is there a free trial available for the payed options ?';
  text2: string = 'is it possible subscribe to the app annualy?';
  text3: string = 'i sit possible to cancel my subscription?';
  text4: string = 'how do i change my account mail ?';
  text5: string = 'how can i change my payment method ?';
}
