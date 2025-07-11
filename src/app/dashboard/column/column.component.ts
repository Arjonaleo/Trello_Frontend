// column.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html'
})
export class ColumnComponent implements OnInit {
  columnForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.columnForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      color: ['', [Validators.required]]
    });
  }

  submitForm() {
    if (this.columnForm.valid) {
      console.log(this.columnForm.value);
    }
  }
}
