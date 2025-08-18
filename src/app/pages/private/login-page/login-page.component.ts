import { Component, OnInit, inject, Renderer2, ChangeDetectionStrategy, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { SelectButtonModule } from 'primeng/selectbutton';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    InputTextModule,
    StyleClassModule,

    SelectButtonModule
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
