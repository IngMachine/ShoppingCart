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
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firebaseAuth: AngularFireAuth,
    private afDB: AngularFirestore,
    private router: Router,
    private http: HttpClient,
    private store: Store<AppState>
  ) {}

  initAuthListener(): void{
    this.firebaseAuth.authState.subscribe( (fbUser: firebase.default.User) => {
      console.log(fbUser);
      if ( fbUser ){
      }
    });
  }

  signup(email: string, password: string, username: string): Promise<void> {
    this.store.dispatch( new ActivateLoadingAction() );
    return this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(resp => {
        const user: User = {
          uid: resp.user?.uid,
          email: resp.user?.email,
          username
        };
        this.afDB
              .doc(`${ user.uid }/usuario`)
              .set( user )
              .then( () => {
                this.router.navigate(['/']);
                this.store.dispatch( new DeactivateLoadingAction() );
              });
      });
      /*   this.http.post(`${this.url}users.json`, user)
                 .subscribe( (resp) => {
                   console.log(resp);
                   this.router.navigate(['/']);
                   this.store.dispatch( new DeactivateLoadingAction() );
                 });
      }); */
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
