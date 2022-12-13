import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Lease } from '../models/lease.model';

@Injectable({
  providedIn: 'root',
})
export class LeasesService {
  private dbPath = '/leases';

  expenceRef: AngularFirestoreCollection<Lease>;

  constructor(private db: AngularFirestore) {
    this.expenceRef = db.collection(this.dbPath);
  }

  getByUser(userId: string): AngularFirestoreCollection<Lease> {
    return this.db.collection<Lease>('leases', (ref) =>
      ref.where('owner', '==', userId)
    );
  }

  create(estate: Lease): any {
    return this.expenceRef.add({ ...estate });
  }

  update(id: string, data: any): Promise<void> {
    return this.expenceRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.expenceRef.doc(id).delete();
  }
}
