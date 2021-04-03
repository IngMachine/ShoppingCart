import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { DeactivateLoadingAction } from '../../../ngrx/actions/ui-loading.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../ngrx/app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loading: boolean;
  subscriptionUI: Subscription;

  display: boolean = false;
  error!: string;

  myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    public store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.subscriptionUI = this.store.select('uiLoading')
              .subscribe( uiLoading => this.loading = uiLoading.isLoading );
  }

  ngOnDestroy(): void {
    this.subscriptionUI.unsubscribe();
  }

  login(): void {
    const { email, password } = this.myForm.value;
    this.authService.login( email, password)
                    .catch(err => {
                      this.error = err.message;
                      this.display = true;
                      this.store.dispatch( new DeactivateLoadingAction() );
                    });
  }

}
