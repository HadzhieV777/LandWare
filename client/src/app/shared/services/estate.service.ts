import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Estate } from '../models/estate.model';

@Injectable({
  providedIn: 'root',
})
export class EstateService {
  private dbPath = '/estates';

  estatesRef: AngularFirestoreCollection<Estate>;

  constructor(private db: AngularFirestore) {
    this.estatesRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Estate> {
    return this.estatesRef;
  }

  getByUser(userId: string): AngularFirestoreCollection<Estate> {
    return this.db.collection<Estate>('estates', ref => ref.where('owner', '==', userId));
    //  ???????????????/
  }

  create(estate: Estate): any {
    return this.estatesRef.add({...estate});
  }

  update(id: string, data: any): Promise<void> {
    return this.estatesRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.estatesRef.doc(id).delete();
  }

}
