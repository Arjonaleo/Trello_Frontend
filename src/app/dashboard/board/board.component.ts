// board.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html'
})
export class BoardComponent implements OnInit {
  boardForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.boardForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      goal: ['', [Validators.maxLength(150)]]
    });
  }

  submitForm() {
    if (this.boardForm.valid) {
      console.log(this.boardForm.value);
    }
  }
}
