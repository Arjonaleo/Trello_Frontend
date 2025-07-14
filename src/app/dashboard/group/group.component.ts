import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']  // Asegúrate de que este archivo exista
})
export class GroupComponent implements OnInit {
  groupForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.groupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  // Acceso directo a los controles del formulario
  get f(): { [key: string]: AbstractControl } {
    return this.groupForm.controls;
  }

  submitForm(): void {
    this.submitted = true;

    if (this.groupForm.invalid) {
      console.warn('Formulario inválido:', this.groupForm.errors);
      return;
    }

    console.log('Formulario válido:', this.groupForm.value);
    // Aquí podrías llamar a un servicio o emitir un evento
  }
}
