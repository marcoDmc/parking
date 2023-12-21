import { Component, Input, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { person } from '../../mock/testimonials';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  private router = inject(Router);
  testimonial: any = person;

  @Input() onRedirectLoginPage = () => this.router.navigate(['parking/signin']);
  @ViewChild('scrolling') scrooling!: any;

  discover: string = 'discover';
  signupFree: string = 'sign up for free';

  favorites: string = `Parking is the ideal tool to help you find your favorite parking lots
  with ease. With Parking, you can find your favorite parking lots in
  seconds, regardless of where they are located.`;
  freeEasy: string = `Parking is an online tool that allows you to search for free parking
  in your area. The tool uses data from a variety of sources, including
  local governments, parking companies and individual users.`;
  earnPoints: string = `Parking is a versatile platform that can be used by anyone who wants
  to earn points and exchange them for rewards.`;

  onRedirectDashboard = () => {
    this.router.navigate(['dashboard']);
  };
  onScroll(event: any) {
    console.log(event);
  }
}
