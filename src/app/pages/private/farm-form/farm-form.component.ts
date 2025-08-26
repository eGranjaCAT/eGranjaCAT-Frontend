import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Granja {
  id: number;
  nombre: string;
  ubicacion: string;
  telefono: string;
  email: string;
  lotes: number;
  estado: 'Activa' | 'Inactiva';
}

@Component({
  selector: 'app-farm-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './farm-form.component.html',
  styleUrls: ['./farm-form.component.css']
})
export class FarmFormComponent {
  @Input() granja?: Granja;
  @Output() guardar = new EventEmitter<Granja>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Crear el formulario reactivo
    this.form = this.fb.group({
      nombre: this.fb.nonNullable.control(this.granja?.nombre || '', Validators.required),
      ubicacion: this.fb.nonNullable.control(this.granja?.ubicacion || '', Validators.required),
      telefono: this.fb.nonNullable.control(this.granja?.telefono || '', [Validators.required, Validators.pattern(/^\+?\d{9,15}$/)]),
      email: this.fb.nonNullable.control(this.granja?.email || '', [Validators.required, Validators.email]),
      lotes: this.fb.nonNullable.control(this.granja?.lotes || 0, [Validators.required, Validators.min(1)]),
      estado: this.fb.nonNullable.control<'Activa' | 'Inactiva'>(this.granja?.estado || 'Activa', Validators.required)
    });
  }

  onGuardar() {
    if (this.form.valid) {
      const nuevaGranja: Granja = { ...this.granja, ...this.form.value };
      this.guardar.emit(nuevaGranja);
      this.form.reset({ estado: 'Activa', lotes: 0 });
    }
  }
}
