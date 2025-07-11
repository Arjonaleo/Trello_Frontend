// task-card.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html'
})
export class TaskCardComponent implements OnInit {
  taskForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.maxLength(200)]],
      assignedTo: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });
  }

  submitForm() {
    if (this.taskForm.valid) {
      console.log(this.taskForm.value);
    }
  }
}
