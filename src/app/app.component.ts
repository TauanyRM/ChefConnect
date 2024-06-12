import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Correção: 'styleUrl' para 'styleUrls'
})
export class AppComponent {
  title = 'projeto-web';
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      numMesa: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form Submitted', this.myForm.value);
    }
  }

  // Getter methods for form controls to use in the template
  get name() {
    return this.myForm.get('name');
  }

  get phone() {
    return this.myForm.get('phone');
  }

  get numMesa() {
    return this.myForm.get('numMesa');
  }
}
