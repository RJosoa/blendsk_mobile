import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/layout/nav/nav.component';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'blendsk_mobile';
  // Variable pour contrôler l'affichage du nav
  showNavigation = true;

  constructor(private router: Router) {
    // S'abonner aux événements de navigation
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router
          .getCurrentNavigation()
          ?.finalUrl?.toString();
        const routesWithoutNav = ['/login', '/register'];
        this.showNavigation = !routesWithoutNav.includes(currentRoute || '');
      }
    });
  }
}
