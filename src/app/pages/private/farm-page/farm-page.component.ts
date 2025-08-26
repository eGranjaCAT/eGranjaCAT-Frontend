import { Component } from '@angular/core';
import { SplitButtonModule } from 'primeng/splitbutton';
import { NgClass } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { Menu, MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { FarmFormComponent } from '../farm-form/farm-form.component';

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
    ReactiveFormsModule,
    TableModule,
    InputTextModule,
    Menu,
    DialogModule,
    FarmFormComponent
  ],
  templateUrl: './farm-page.component.html',
  styleUrl: './farm-page.component.css'
})
export class FarmPageComponent {

  // ---------- VARIABLES DE ESTADO ----------
  granjas: Granja[] = [
    { id: 1, nombre: 'Granja Can Martí', ubicacion: 'Girona', telefono: '+34 972 123 456', email: 'info@canmarti.cat', lotes: 12, estado: 'Activa' },
    { id: 2, nombre: 'Explotació Agrícola Solà', ubicacion: 'Lleida', telefono: '+34 973 987 654', email: 'contacte@sola.cat', lotes: 8, estado: 'Activa' },
    { id: 3, nombre: 'Granja Ecològica Verdaguer', ubicacion: 'Tarragona', telefono: '+34 977 456 789', email: 'eco@verdaguer.cat', lotes: 5, estado: 'Inactiva' }
  ];
  
  granjasFiltradas: Granja[] = [...this.granjas];
  filtro: string = '';
  
  mostrarFormulario: boolean = false;
  mostrarConfirmarBorrar: boolean = false;
  granjaAEliminar?: Granja;

  items = [
    { label: 'Editar', icon: 'pi pi-pencil' },
    { label: 'Eliminar', icon: 'pi pi-trash' },
    { label: 'Detalles', icon: 'pi pi-info-circle' }
  ];

  // ---------- GETTERS ----------
  get granjasActivasCount(): number {
    return this.granjas.filter(g => g.estado === 'Activa').length;
  }

  get granjasInactivasCount(): number {
    return this.granjas.filter(g => g.estado === 'Inactiva').length;
  }

  // ---------- MÉTODOS PRINCIPALES ----------
  filtrarGranjas() {
    const f = this.filtro.toLowerCase();
    this.granjasFiltradas = this.granjas.filter(g =>
      g.nombre.toLowerCase().includes(f) ||
      g.ubicacion.toLowerCase().includes(f) ||
      g.estado.toLowerCase().includes(f)
    );
  }

  nuevaGranja(granja: Granja) {
    const idNuevo = this.granjas.length > 0 
                    ? Math.max(...this.granjas.map(g => g.id)) + 1 
                    : 1;
    const nueva = { ...granja, id: idNuevo };
    this.granjas.push(nueva);
    this.filtrarGranjas();
    this.mostrarFormulario = false;
  }

  editarGranja(granja: Granja) {
    console.log('Editar', granja);
  }

  eliminarGranja() {
    if (!this.granjaAEliminar) return;
    this.granjas = this.granjas.filter(g => g.id !== this.granjaAEliminar!.id);
    this.filtrarGranjas();
    this.granjaAEliminar = undefined;
    this.mostrarConfirmarBorrar = false;
  }

  confirmarEliminar(granja: Granja) {
    this.granjaAEliminar = granja;
    this.mostrarConfirmarBorrar = true;
  }

  // ---------- MÉTODOS AUXILIARES ----------
  getMenuItems(granja: Granja) {
    return [
      { label: 'Editar', icon: 'pi pi-pencil', command: () => this.editarGranja(granja) },
      { label: 'Eliminar', icon: 'pi pi-trash', command: () => this.confirmarEliminar(granja) }
    ];
  }

}
