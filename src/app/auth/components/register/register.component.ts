import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState } from 'src/app/ngrx/app.reducer';
import { AuthService } from '../../service/auth.service';
import { Store } from '@ngrx/store';
import { DeactivateLoadingAction } from '../../../ngrx/actions/ui-loading.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loading: boolean;

  display: boolean = false;
  error!: string;

  myform: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    public store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('uiLoading')
              .subscribe( uiLoading => this.loading = uiLoading.isLoading );
  }
  singup(): void {
    const { username, email, password} = this.myform.value;
    this.authService.signup(email, password, username)
                    .catch(err => {
                      this.store.dispatch( new DeactivateLoadingAction() )
                      this.error = err.message;
                      this.display = true;
                      console.log(this.display);
                    });
  }

}
