import { Component } from '@angular/core';
@Component({
  selector: 'app-gtr-page',
  imports: [
 ],
  templateUrl: './gtr-page.component.html',
  styleUrl: './gtr-page.component.css'
})
export class GtrPageComponent {
 registers = [
    { numero: 'GTR-2024-001', lot: 'LOT-2024-001', producte: 'Tomàquet cherry', quantitat: '1200 kg', dataCollita: '2024-02-01', destinacio: 'Mercabarna' },
    { numero: 'GTR-2024-002', lot: 'LOT-2024-002', producte: 'Enciam iceberg', quantitat: '800 kg', dataCollita: '2024-02-03', destinacio: 'Carrefour' },
    { numero: 'GTR-2024-003', lot: 'LOT-2024-004', producte: 'Pebrot vermell', quantitat: '650 kg', dataCollita: '2024-02-05', destinacio: 'El Corte Inglés' },
    { numero: 'GTR-2024-004', lot: 'LOT-2024-001', producte: 'Tomàquet pera', quantitat: '950 kg', dataCollita: '2024-02-07', destinacio: 'Mercadona' }
  ];
}
