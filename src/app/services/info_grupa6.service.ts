import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {Info6} from '../model/info_grupa6.model';

@Injectable({
  providedIn: 'root'
})
export class InfoGrupa6Service {
  infos6Collection: AngularFirestoreCollection<Info6>;
  infos6: Observable<Info6[]>;
  info6: Info6;
  infos6Doc: AngularFirestoreDocument<Info6>;


  constructor(public afs: AngularFirestore) {
    this.infos6Collection = this.afs.collection('infos6', ref => ref.orderBy('id', 'desc')); 
    this.infos6 = this.infos6Collection.valueChanges();

   }

   getInfos6(){
     return this.infos6;
   }
   getInfo6(infos6id){
     this.afs.doc(`infos6/${infos6id}`).ref.get().then(function(doc){
       if (doc.exists){
         console.log('Dokument istnieje');
         doc.data();
         const data = doc.data() as any;
         return { infos6id, ...data};
       } else {
         console.log ('Nie ma takiego dokumentu');
       }
       
     }). catch(function (error){
       console.log('Błąd w pobieraniu dokumentu:', error);
     }).then(result => {
       this.info6 = result;
     }).catch(err=>{
       console.log('error');
     });
     return this.info6;
   }

    addInfos6(infos6: Info6){
      this.afs.collection('infos6').doc(infos6.id).set(infos6).then();
    }

    updateInfos6(infos6: Info6){
      this.infos6Doc=this.afs.doc(`infos6/${infos6.id}`);
      this.infos6Doc.update(infos6);
    }

    deleteInfos6(infos6:Info6){
      this.infos6Doc=this.afs.doc(`infos6/${infos6.id}`);
      this.infos6Doc.delete();
    }




}