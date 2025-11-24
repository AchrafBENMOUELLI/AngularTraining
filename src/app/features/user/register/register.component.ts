import { Component , OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { FormControl, FormGroup, Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  user: User;
  formregister: FormGroup;
  constructor() {

  }

  ngOnInit() {
    this.user = new User();
    this.user.phones = [];
    this.formregister = new FormGroup({
      firstName: new FormControl('Achraf', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('Ben Mouelli', [Validators.required, Validators.minLength(2)]),
      Email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      Password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      adresse: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      zipCode: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{4,10}$")])
    })
    });
  }
  save(){
    this.user=this.formregister.getRawValue();
    console.log(this.user);
  }
  addPhone() {
  if (!this.user.phones) {
    this.user.phones = [];
  }
  this.user.phones.push('');
}
}
