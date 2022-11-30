import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {User} from 'firebase/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstateService {
  // currentUser: User;
  
  // constructor(
  //   private afs: AngularFirestore, 
  //   private afAuth: AngularFireAuth) {
  //     this.afAuth.authState.subscribe(user => this.currentUser = user)
  //   }
  
  //   getAllEstates(): Observable<any> {
  //     return this.afs.collection<any>('posts', ref => ref.orderBy('time', 'desc'))
  //       .snapshotChanges()
  //       .pipe(
  //         map(actions => {
  //           return actions.map(item => {
  //             return {
  //               id: item.payload.doc.id,
  //               ...item.payload.doc.data(),
  //             };
  //           });
  //         })
  //       );
  //   }
  
}

