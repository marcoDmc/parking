import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  private formServiceBuilder = inject(FormBuilder);

  name: string = 'send';
  className: string = 'button1';

  protected form = this.formServiceBuilder.group({
    firstName: [''],
    lastName: [''],
    message: [''],
    email: [''],
  });
}
