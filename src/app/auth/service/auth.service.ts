import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { map } from 'rxjs/operators';
import { User, DataObj } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngrx/app.reducer';
import { ActivateLoadingAction, DeactivateLoadingAction } from '../../ngrx/actions/ui-loading.actions';
import { Observable, Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { SetUserAction, UnSetUserAction } from '../../ngrx/actions/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubscription: Subscription = new Subscription();
  private user: User;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private afDB: AngularFirestore,
    private router: Router,
    private store: Store<AppState>
  ) {}

  initAuthListener(): void{
    this.firebaseAuth.authState.subscribe( (fbUser: firebase.default.User) => {
      console.log(fbUser);
      if ( fbUser ){
        this.userSubscription = this.afDB.doc(`${ fbUser.uid }/usuario`)
        .valueChanges()
        .subscribe( (usuarioObj: DataObj) => {
          const newUser = new User( usuarioObj );
          this.store.dispatch( new SetUserAction( newUser ));
          this.user = newUser;
         });
      } else {
        this.user = null;
        this.userSubscription.unsubscribe();
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
    this.store.dispatch( new UnSetUserAction() );
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

  getUsuario(): User {
    return {...this.user};
  }
}
