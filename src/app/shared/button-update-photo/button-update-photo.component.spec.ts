import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonUpdatePhotoComponent } from './button-update-photo.component';

describe('ButtonUpdatePhotoComponent', () => {
  let component: ButtonUpdatePhotoComponent;
  let fixture: ComponentFixture<ButtonUpdatePhotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonUpdatePhotoComponent]
    });
    fixture = TestBed.createComponent(ButtonUpdatePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
