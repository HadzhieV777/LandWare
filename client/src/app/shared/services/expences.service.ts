import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Expence } from '../models/expence.model';


@Injectable({
  providedIn: 'root'
})
export class ExpencesService {

  private dbPath = '/expences';

  expenceRef: AngularFirestoreCollection<Expence>;

  constructor(private db: AngularFirestore) {
    this.expenceRef = db.collection(this.dbPath);
  }
  
  getByUser(userId: string): AngularFirestoreCollection<Expence> {
    return this.db.collection<Expence>('expences', ref => ref.where('owner', '==', userId));
  }

  create(estate: Expence): any {
    return this.expenceRef.add({...estate});
  }

  update(id: string, data: any): Promise<void> {
    return this.expenceRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.expenceRef.doc(id).delete();
  }

}
