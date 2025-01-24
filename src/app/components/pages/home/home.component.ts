import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  username: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      if (!localStorage.getItem('token')) {
        this.router.navigate(['/login']);
      }

      const token = localStorage.getItem('token');
      if (token) {
        try {
          const decodedToken: any = jwtDecode(token);
          this.username = decodedToken.username;
        } catch (error) {
          console.error('Error decoding token:', error);
        }
      }
    }
  }

  logout() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }
  }
}
