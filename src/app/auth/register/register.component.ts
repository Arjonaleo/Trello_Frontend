import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { IAuthService } from '../auth.service.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
  // ¡Asegúrate de que aquí NO esté 'standalone: true'!
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private auth: IAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email:    ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  private passwordMatchValidator(form: FormGroup): ValidationErrors | null {
    const pw = form.get('password')?.value;
    const cp = form.get('confirmPassword')?.value;
    return pw === cp ? null : { mismatch: true };
  }

  // Controles del formulario
  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  get passwordMismatch(): boolean {
    return this.registerForm.hasError('mismatch') && !!this.f['confirmPassword'].touched;
  }

  hasError(controlName: string, errorName: string): boolean {
    const ctl = this.f[controlName];
    return !!(ctl.touched && ctl.hasError(errorName));
  }

  submitForm(): void {
    this.submitted = true;
    this.errorMessage = '';

    if (this.registerForm.invalid) {
      console.warn('⚠️ Formulario de registro inválido');
      return;
    }

    const { username, email, password } = this.registerForm.value;
    this.auth.register(username, email, password).subscribe({
      next: () => {
        console.log('✅ Registro exitoso');
        this.router.navigate(['/dashboard']);
      },
      error: err => {
        this.errorMessage = err.message || 'Error en el registro';
      }
    });
  }
}
