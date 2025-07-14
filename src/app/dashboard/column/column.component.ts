// src/app/dashboard/column/column.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']  // Asegúrate de que este archivo exista
})
export class ColumnComponent implements OnInit {
  columnForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.columnForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      color: ['', [Validators.required]]
    });
  }

  // Getter para facilitar acceso en el template
  get f(): { [key: string]: AbstractControl } {
    return this.columnForm.controls;
  }

  submitForm(): void {
    this.submitted = true;

    if (this.columnForm.invalid) {
      console.warn('⚠️ Formulario columna inválido');
      return;
    }

    console.log('✅ Columna válida:', this.columnForm.value);

    // Aquí podrías llamar a un servicio para guardar la columna o actualizar el estado
  }
}
