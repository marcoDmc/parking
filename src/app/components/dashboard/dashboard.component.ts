import { Component, DoCheck, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements DoCheck, OnInit {
  private router = inject(Router);
  teste: string = '';
  imageSource: any =
  'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=';

  Teste() {
    this.teste = 'abc';
  }
  ngOnInit(): void {
    
  }

  ngDoCheck(): void {
    if (localStorage.getItem('token')) {
    }
  }
}
