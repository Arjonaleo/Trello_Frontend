// group.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html'
})
export class GroupComponent implements OnInit {
  groupForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.groupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  submitForm() {
    if (this.groupForm.valid) {
      console.log(this.groupForm.value);
    }
  }
}
