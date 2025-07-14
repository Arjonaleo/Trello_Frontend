import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']  // Agrega esta línea si tienes estilos específicos
  // Nota: Elimina 'standalone: true' si lo tenías antes
})
export class BoardComponent implements OnInit {
  boardForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.boardForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      goal: ['', [Validators.maxLength(150)]]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.boardForm.controls;
  }

  submitForm(): void {
    this.submitted = true;

    if (this.boardForm.invalid) {
      console.warn('⚠️ Formulario inválido');
      return;
    }

    console.log('✅ Datos válidos:', this.boardForm.value);

    // Aquí iría la lógica para guardar o procesar el formulario
  }
}
