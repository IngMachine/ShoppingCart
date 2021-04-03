import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngrx/app.reducer';
import { ActivateLoadingAction, DeactivateLoadingAction } from '../../ngrx/actions/ui-loading.actions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'https://shopping-cart-708cb-default-rtdb.firebaseio.com/';

  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router,
    private http: HttpClient,
    private store: Store<AppState>
  ) {}

  initAuthListener(): void{
    this.firebaseAuth.authState.subscribe( fbUser => {
      console.log(fbUser);
    });
  }

  signup(email: string, password: string, username: string): Promise<void> {
    this.store.dispatch( new ActivateLoadingAction() );
    return this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        const user: User = {
          uid: value.user?.uid,
          email: value.user?.email,
          username
        };
        this.http.post<User>(`${this.url}users.json`, user)
                 .subscribe( () => {
                   this.router.navigate(['/']);
                   this.store.dispatch( new DeactivateLoadingAction() );
                 });
      });
  }

  login(email: string, password: string): Promise<void>{
    this.store.dispatch( new ActivateLoadingAction() );
    return this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then( value => {
        this.router.navigate(['/']);
        this.store.dispatch( new DeactivateLoadingAction() );
      });
  }

  logout(): void{
    this.router.navigate(['/auth/login']);
    this.firebaseAuth.signOut();
  }

  isAuth(): Observable<boolean> {
    return this.firebaseAuth.authState
                            .pipe(
                              map( fbUser =>  {
                                if ( fbUser == null){
                                  this.router.navigate(['/auth/login']);
                                }
                                return fbUser != null;
                              })
                            );
  }
}
