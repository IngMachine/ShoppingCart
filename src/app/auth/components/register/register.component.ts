import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  display: boolean = false;
  error!: string;

  myform: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }
  singup(): void {
    const { username, email, password} = this.myform.value;
    this.authService.signup(email, password, username)
                    .catch(err => {
                      this.error = err.message;
                      this.display = true;
                    });
  }

}
