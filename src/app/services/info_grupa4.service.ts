import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {Info4} from '../model/info_grupa4.model';

@Injectable({
  providedIn: 'root'
})
export class InfoGrupa4Service {
  infos4Collection: AngularFirestoreCollection<Info4>;
  infos4: Observable<Info4[]>;
  info4: Info4;
  infos4Doc: AngularFirestoreDocument<Info4>;


  constructor(public afs: AngularFirestore) {
    this.infos4Collection = this.afs.collection('infos4', ref => ref.orderBy('id', 'desc')); 
    this.infos4 = this.infos4Collection.valueChanges();

   }

   getInfos4(){
     return this.infos4;
   }
   getInfo4(infos4id){
     this.afs.doc(`infos4/${infos4id}`).ref.get().then(function(doc){
       if (doc.exists){
         console.log('Dokument istnieje');
         doc.data();
         const data = doc.data() as any;
         return { infos4id, ...data};
       } else {
         console.log ('Nie ma takiego dokumentu');
       }
       
     }). catch(function (error){
       console.log('Błąd w pobieraniu dokumentu:', error);
     }).then(result => {
       this.info4 = result;
     }).catch(err=>{
       console.log('error');
     });
     return this.info4;
   }

    addInfos4(infos4: Info4){
      this.afs.collection('infos4').doc(infos4.id).set(infos4).then();
    }

    updateInfos4(infos4: Info4){
      this.infos4Doc=this.afs.doc(`infos4/${infos4.id}`);
      this.infos4Doc.update(infos4);
    }

    deleteInfos4(infos4:Info4){
      this.infos4Doc=this.afs.doc(`infos4/${infos4.id}`);
      this.infos4Doc.delete();
    }




}