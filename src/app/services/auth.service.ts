import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserI } from './../models/user.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userDate: Observable<firebase.User>;
  constructor(
    private afAuth: AngularFireAuth
    ) {
    this.userDate = afAuth.authState;
  }

  loginByEmail( user: UserI ) {
    const { email, password } = user;
    return this.afAuth.signInWithEmailAndPassword( email, password );
  }

  logout() {
   return this.afAuth.signOut();
  }
}
