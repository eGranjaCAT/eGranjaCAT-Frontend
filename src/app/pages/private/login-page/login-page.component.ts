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
    HlmInput
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  public languageOptions: any[] = [{ label: 'CAT', value: 'cat' }, { label: 'ESP', value: 'esp' }];

  public loginForm = signal<FormGroup>(this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    remember: [false],
    language: ['esp'] // Valor inicial
  }));

  public onSubmit(): void {
    this.router.navigate(['/private/dashboard-page']);
  }
}
