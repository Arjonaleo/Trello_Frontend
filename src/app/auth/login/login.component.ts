import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Acceso más claro a los controles del formulario
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  submitForm(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      console.warn('⚠️ Formulario inválido');
      return;
    }

    console.log('✅ Login válido:', this.loginForm.value);

    // Ejemplo para después:
    // this.authService.login(this.loginForm.value).subscribe(response => {
    //   this.router.navigate(['/dashboard']);
    // });
  }
}
