import { Component } from '@angular/core';
import { SplitButtonModule } from 'primeng/splitbutton';
import { NgClass } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { Menu, MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
interface Granja {
  id: number;
  nombre: string;
  ubicacion: string;
  telefono: string;
  email: string;
  lotes: number;
  estado: 'Activa' | 'Inactiva';
}
@Component({
  selector: 'app-farm-page',
  imports: [
    SplitButtonModule,
    NgClass,
    ButtonModule,
    FormsModule,
    TableModule,
    InputTextModule,
    Menu
  ],
  templateUrl: './farm-page.component.html',
  styleUrl: './farm-page.component.css'
})
export class FarmPageComponent {
  granjas: Granja[] = [
    { id: 1, nombre: 'Granja Can Martí', ubicacion: 'Girona', telefono: '+34 972 123 456', email: 'info@canmarti.cat', lotes: 12, estado: 'Activa' },
    { id: 2, nombre: 'Explotació Agrícola Solà', ubicacion: 'Lleida', telefono: '+34 973 987 654', email: 'contacte@sola.cat', lotes: 8, estado: 'Activa' },
    { id: 3, nombre: 'Granja Ecològica Verdaguer', ubicacion: 'Tarragona', telefono: '+34 977 456 789', email: 'eco@verdaguer.cat', lotes: 5, estado: 'Inactiva' }
  ];
  items = [
    {
      label: 'Editar',
      icon: 'pi pi-pencil'
    },
    {
      label: 'Eliminar',
      icon: 'pi pi-trash'
    },
    {
      label: 'Detalles',
      icon: 'pi pi-info-circle'
    }
  ]
    ;
  filtro: string = '';
  granjasFiltradas: Granja[] = [...this.granjas];

  filtrarGranjas() {
    const f = this.filtro.toLowerCase();
    this.granjasFiltradas = this.granjas.filter(g =>
      g.nombre.toLowerCase().includes(f) ||
      g.ubicacion.toLowerCase().includes(f) ||
      g.estado.toLowerCase().includes(f)
    );
  }

  nuevaGranja() {
    console.log('Crear nueva granja');
  }

  editarGranja(g: Granja) {
    console.log('Editar', g);
  }

  eliminarGranja(g: Granja) {
    console.log('Eliminar', g);
  }

  get granjasActivasCount(): number {
    return Array.isArray(this.granjas)
      ? this.granjas.filter(g => g.estado === 'Activa').length
      : 0;
  }

  get granjasInactivasCount(): number {
    return Array.isArray(this.granjas)
      ? this.granjas.filter(g => g.estado === 'Inactiva').length
      : 0;
  }

  getMenuItems(granja: Granja) {
    return [
      { label: 'Editar', icon: 'pi pi-pencil', command: () => this.editarGranja(granja) },
      { label: 'Eliminar', icon: 'pi pi-trash', command: () => this.eliminarGranja(granja) }
    ];
  }
}
