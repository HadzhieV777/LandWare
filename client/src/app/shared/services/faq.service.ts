import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Faq } from '../models/faq.model';


@Injectable({
  providedIn: 'root'
})
export class FaqService {

  private dbPath = '/faq';

  faqRef: AngularFirestoreCollection<Faq>;

  constructor(private db: AngularFirestore) {
    this.faqRef = db.collection(this.dbPath);
  }
  
  getAll(): AngularFirestoreCollection<Faq> {
    return this.faqRef;
  }
  // create(faq: Faq): any {
  //   return this.faqRef.add({...faq});
  // }

  // update(id: string, data: any): Promise<void> {
  //   return this.faqRef.doc(id).update(data);
  // }

  // delete(id: string): Promise<void> {
  //   return this.faqRef.doc(id).delete();
  // }

}
