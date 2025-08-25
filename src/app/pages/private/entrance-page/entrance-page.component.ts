import { Component } from '@angular/core';
@Component({
  selector: 'app-entrance-page',
  imports: [
    
  ],
  templateUrl: './entrance-page.component.html',
  styleUrl: './entrance-page.component.css'
})
export class EntrancePageComponent {
  entrances = [
    { lot: 'LOT-2024-001', producte: 'Fertilizant orgànic', quantitat: '500 kg', data: '2024-02-01', proveidor: 'AgroCAT SL', preu: '450€' },
    { lot: 'LOT-2024-002', producte: "Llavors d'enciam", quantitat: '2 kg', data: '2024-02-03', proveidor: 'Semillas Mediterráneas', preu: '85€' },
    { lot: 'LOT-2024-003', producte: 'Insecticida ecològic', quantitat: '10 L', data: '2024-02-05', proveidor: 'EcoBio Solutions', preu: '320€' },
    { lot: 'LOT-2024-001', producte: 'Substrat', quantitat: '1000 L', data: '2024-02-07', proveidor: 'Substrats Catalans', preu: '180€' }
  ];
}
