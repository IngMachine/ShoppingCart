import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router
  ) {
  }

  signup(email: string, password: string, username: string): void{
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.router.navigate(['/']);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  login(email: string, password: string): void{
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then( () => {
        this.router.navigate(['/']);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  logout(): void{
    this.firebaseAuth
      .signOut();
  }
}
