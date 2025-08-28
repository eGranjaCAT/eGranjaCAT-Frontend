import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmButton } from '@spartan-ng/helm/button';
import { lucideX } from '@ng-icons/lucide';
import { lucideSave } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { NgIcon, provideIcons } from '@ng-icons/core';

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
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HlmInput,
    HlmButton,
    NgIcon,
    HlmIcon
  ],
  providers: [provideIcons({ lucideX, lucideSave })],
  templateUrl: './farm-form.component.html',
  styleUrls: ['./farm-form.component.css']
})
export class FarmFormComponent {
  @Input() granja?: Granja;
  @Output() guardar = new EventEmitter<Granja>();
  @Output() cancelarForm = new EventEmitter<void>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      nombre: this.fb.nonNullable.control(this.granja?.nombre || '', Validators.required),
      ubicacion: this.fb.nonNullable.control(this.granja?.ubicacion || '', Validators.required),
      telefono: this.fb.nonNullable.control(this.granja?.telefono || '', [
        Validators.required,
        Validators.pattern(/^\+?\d{9,15}$/)
      ]),
      email: this.fb.nonNullable.control(this.granja?.email || '', [
        Validators.required,
        Validators.email
      ]),
      lotes: this.fb.nonNullable.control(this.granja?.lotes || 0, [
        Validators.required,
        Validators.min(1)
      ]),
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

  toggleEstado() {
  const current = this.form.get('estado')?.value;
  this.form.get('estado')?.setValue(current === 'Activa' ? 'Inactiva' : 'Activa');
}

  cancelar() {
    this.cancelarForm.emit();
  }
}
