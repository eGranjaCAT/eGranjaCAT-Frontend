import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-page',
  imports: [
    CommonModule
  ],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {
 users = [
    { nom: 'Maria García', email: 'maria@granja-example.cat', rol: 'Administrador', granja: 'Granja Can Puig', estat: 'Actiu', ultimAcces: '2024-02-08' },
    { nom: 'Joan Martí', email: 'joan@granja-example.cat', rol: 'Tècnic', granja: 'Granja Els Pins', estat: 'Actiu', ultimAcces: '2024-02-07' },
    { nom: 'Anna López', email: 'anna@granja-example.cat', rol: 'Inspector', granja: 'Granja Mas Nou', estat: 'Actiu', ultimAcces: '2024-02-06' },
    { nom: 'Carles Vila', email: 'carles@granja-example.cat', rol: 'Operari', granja: 'Granja Cal Boter', estat: 'Inactiu', ultimAcces: '2024-01-30' }
  ];
}
