import { Component } from '@angular/core';


@Component({
  selector: 'app-visits-page',
  imports: [
   
    
  ],
  templateUrl: './visits-page.component.html',
  styleUrl: './visits-page.component.css'
})
export class VisitsPageComponent {
  visits = [
    { lot: 'LOT-2024-001', tipus: 'Inspecció fitosanitària', data: '2024-02-10', inspector: 'Dr. Joan Martí', estat: 'Programada', observacions: 'Control de plagues' },
    { lot: 'LOT-2024-002', tipus: 'Control de qualitat', data: '2024-02-08', inspector: 'Anna López', estat: 'Completada', observacions: 'Tot correcte' },
    { lot: 'LOT-2024-004', tipus: 'Auditoria orgànica', data: '2024-02-15', inspector: 'Carles Vila', estat: 'Programada', observacions: 'Certificació ecològica' },
    { lot: 'LOT-2024-003', tipus: 'Inspecció tècnica', data: '2024-02-05', inspector: 'Maria Soler', estat: 'Completada', observacions: 'Revisió sistema reg' }
  ];
}
