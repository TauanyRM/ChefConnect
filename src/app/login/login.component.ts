import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(''), Validators.minLength(3), Validators.maxLength(50)]],
      phone: ['', [Validators.required, Validators.pattern('^\\d{2}\\d{9}$')    ]],
      numMesa: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

 

  get nameControl(): AbstractControl | null {
    return this.loginForm.get('name');
  }

  get phoneControl(): AbstractControl | null {
    return this.loginForm.get('phone');
  }

  get numMesaControl(): AbstractControl | null {
    return this.loginForm.get('numMesa');
  }

  login(): void {
    if (this.loginForm.valid) {
      const { name, phone, numMesa } = this.loginForm.value;
      this.router.navigate(['/cardapio'], {
        queryParams: { nome: name, telefone: phone, numMesa: numMesa }
      });
    }
  }

}
