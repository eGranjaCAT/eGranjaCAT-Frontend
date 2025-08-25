import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: "./nav-bar.component.html",
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class NavBarComponent {
  items = [
    {
      label: 'Tauler',
      icon: 'home', // Cambia el icono según la nueva librería
      routerLink: '/private/dashboard-page',
      routerLinkActiveOptions: { exact: true }
    },
    {
      label: 'Granges',
      icon: 'building',
      routerLink: '/private/farm-page',
    },
    {
      label: 'Lots',
      icon: 'box',
      routerLink: '/private/lots-page',
    },
    {
      label: 'Entrades',
      icon: 'truck',
      routerLink: '/private/entrance-page',
    },
    {
      label: 'Visites',
      icon: 'calendar',
      routerLink: '/private/visits-page'
    },
    {
      label: 'Usuaris',
      icon: 'users',
      routerLink: '/private/user-page'
    },
    {
      label: 'GTR',
      icon: 'database',
      routerLink: '/private/gtr-page'
    },
  ];

  toggleMenu(event: Event) {
    // Implementa la lógica del menú con la nueva librería aquí si es necesario
  }

  logout() {
    // Implementa la lógica de logout aquí
    console.log('Logout clicked');
  }
}
