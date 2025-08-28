import { Component, inject, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HlmButton } from '@spartan-ng/helm/button';
import {
  HlmCardContent,
  HlmCard,
  HlmCardFooter,
  HlmCardHeader,
  HlmCardTitle,
} from "@spartan-ng/helm/card"
import { HlmInput } from '@spartan-ng/helm/input';
import { FarmFormComponent, Granja } from '../farm-form/farm-form.component';
import { HlmFormFieldModule } from '@spartan-ng/helm/form-field';
import { HlmError } from '@spartan-ng/helm/form-field';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideEye, lucideEyeOff, lucideLock, lucideMail } from '@ng-icons/lucide';

@Component({
  selector: 'app-login-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HlmButton,
    HlmCard,
    HlmCardHeader,
    HlmCardTitle, 
    HlmCardContent,
    HlmCardFooter,
    HlmInput,
    FarmFormComponent,
    HlmFormFieldModule,
    HlmError,
    HlmIcon,
    NgIcon,

  ],
  providers: [
    provideIcons({
      lucideMail,
      lucideLock,
      lucideEye,
      lucideEyeOff
    }),
  ],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  
  public loginForm = signal<FormGroup>(this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  }));

  public statusButtonLanguage = signal(false);

  // Flag para mostrar/ocultar la contraseña
  public mostrarContrasena = signal(false);
  // Flag para mostrar el formulario de granja
  public mostrarFormGranja = signal(false);

  // Método para alternar la visibilidad de la contraseña
  public toggleMostrarContrasena(): void {
    this.mostrarContrasena.set(!this.mostrarContrasena());
  }

  public toggleLanguage(): void {
    this.statusButtonLanguage.set(!this.statusButtonLanguage());
  }


  // Acción al pulsar el botón Ingresar
  public onSubmit(): void {
    this.mostrarFormGranja.set(true); // mostrar el formulario en lugar de navegar
  }

  // Evento al guardar la granja
  public onGuardarGranja(granja: Granja): void {
    console.log('Granja guardada:', granja);
    this.mostrarFormGranja.set(false); // cerrar el formulario tras guardar
    this.router.navigate(['/private/dashboard-page']); // ahora sí navegamos
  }

  public submitLogin(): void {
    this.router.navigate(['/private/dashboard-page']);
  }
}
