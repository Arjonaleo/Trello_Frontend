import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  private passwordMatchValidator(form: FormGroup): ValidationErrors | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  submitForm(): void {
    if (this.registerForm.invalid) {
      console.warn('⚠️ Formulario de registro inválido');
      return;
    }

    console.log('✅ Datos válidos para registro:', this.registerForm.value);

    // Aquí podrías usar AuthService:
    // this.authService.register(this.registerForm.value).subscribe(...)
  }

  hasError(controlName: string, errorName: string): boolean {
    const control = this.registerForm.get(controlName);
    return !!(control?.touched && control.hasError(errorName));
  }

  get passwordMismatch(): boolean {
    return this.registerForm.hasError('mismatch') && !!this.registerForm.get('confirmPassword')?.touched;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }
}

