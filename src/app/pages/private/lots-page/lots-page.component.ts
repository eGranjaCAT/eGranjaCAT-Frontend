import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
@Component({
  selector: 'app-lots-page',
  imports: [
    TableModule,
    TagModule,
    ButtonModule
  ],
  templateUrl: './lots-page.component.html',
  styleUrl: './lots-page.component.css'
})
export class LotsPageComponent {
lots = [
    { codi: 'LOT-2024-001', granja: 'Granja Can Puig', superficie: '2.5 ha', cultiu: 'Tomàquet', estat: 'Actiu', dataCreacio: '2024-01-15' },
    { codi: 'LOT-2024-002', granja: 'Granja Els Pins', superficie: '1.8 ha', cultiu: 'Enciam', estat: 'Actiu', dataCreacio: '2024-01-20' },
    { codi: 'LOT-2024-003', granja: 'Granja Mas Nou', superficie: '3.2 ha', cultiu: 'Carbassó', estat: 'Inactiu', dataCreacio: '2024-01-10' },
    { codi: 'LOT-2024-004', granja: 'Granja Cal Boter', superficie: '2.1 ha', cultiu: 'Pebrot', estat: 'Actiu', dataCreacio: '2024-01-25' }
  ];
}
