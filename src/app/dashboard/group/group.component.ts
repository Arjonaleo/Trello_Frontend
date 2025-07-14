// group.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']  // Agrega estilos si tienes o planeas
})
export class GroupComponent implements OnInit {
  groupForm!: FormGroup;
  submitted = false;  // Para controlar el estado de submit y mostrar errores

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.groupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  // Acceso rápido a controles para validaciones en la plantilla
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
    // Aquí iría la lógica para enviar datos, llamar a un servicio, etc.
  }
}
