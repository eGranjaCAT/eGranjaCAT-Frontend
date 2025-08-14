import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../../../components/nav-bar/nav-bar.component';
import { HeaderBarComponent } from '../../../components/header-bar/header-bar.component';


@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  standalone: true,
  imports: [HeaderBarComponent, NavBarComponent, RouterOutlet]
})
export class LayoutAdminComponent {

}
