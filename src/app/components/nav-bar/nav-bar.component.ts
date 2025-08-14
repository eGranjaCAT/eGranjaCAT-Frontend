import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    InputTextModule,
    ButtonModule,
    AvatarModule,
    MenuModule
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
  @ViewChild('userMenu') menu!: Menu;

  items: MenuItem[] = [
    {
      label: 'Tauler',
      icon: 'pi pi-home',
      routerLink: '/tauler'
    },
    {
      label: 'Granges',
      icon: 'pi pi-building',
      routerLink: '/granges'
    },
    {
      label: 'Lots',
      icon: 'pi pi-box',
      routerLink: '/lots'
    },
    {
      label: 'Entrades',
      icon: 'pi pi-truck',
      routerLink: '/entrades'
    },
    {
      label: 'Visites',
      icon: 'pi pi-calendar',
      routerLink: '/visites'
    },
    {
      label: 'Usuaris',
      icon: 'pi pi-users',
      routerLink: '/usuaris'
    },
    {
      label: 'GTR',
      icon: 'pi pi-database',
      routerLink: '/gtr'
    }
  ];

  toggleMenu(event: Event) {
    if (this.menu) {
      this.menu.toggle(event);
    }
  }

  logout() {
    // Implement logout logic here
    console.log('Logout clicked');
  }
}
