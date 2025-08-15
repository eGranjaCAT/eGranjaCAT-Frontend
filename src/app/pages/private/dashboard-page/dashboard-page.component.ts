import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from "primeng/button";

@Component({
  selector: 'app-dashboard-page',
  imports: [CardModule, ButtonModule],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

}
