import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpHomePageComponent } from './help-home-page.component';

describe('HelpHomePageComponent', () => {
  let component: HelpHomePageComponent;
  let fixture: ComponentFixture<HelpHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpHomePageComponent]
    });
    fixture = TestBed.createComponent(HelpHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
