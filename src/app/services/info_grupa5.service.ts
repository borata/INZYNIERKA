import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {Info5} from '../model/info_grupa5.model';

@Injectable({
  providedIn: 'root'
})
export class InfoGrupa5Service {
  infos5Collection: AngularFirestoreCollection<Info5>;
  infos5: Observable<Info5[]>;
  info5: Info5;
  infos5Doc: AngularFirestoreDocument<Info5>;


  constructor(public afs: AngularFirestore) {
    this.infos5Collection = this.afs.collection('infos5', ref => ref.orderBy('id', 'desc')); 
    this.infos5 = this.infos5Collection.valueChanges();

   }

   getInfos5(){
     return this.infos5;
   }
   getInfo5(infos5id){
     this.afs.doc(`infos5/${infos5id}`).ref.get().then(function(doc){
       if (doc.exists){
         console.log('Dokument istnieje');
         doc.data();
         const data = doc.data() as any;
         return { infos5id, ...data};
       } else {
         console.log ('Nie ma takiego dokumentu');
       }
       
     }). catch(function (error){
       console.log('Błąd w pobieraniu dokumentu:', error);
     }).then(result => {
       this.info5 = result;
     }).catch(err=>{
       console.log('error');
     });
     return this.info5;
   }

    addInfos5(infos5: Info5){
      this.afs.collection('infos5').doc(infos5.id).set(infos5).then();
    }

    updateInfos5(infos5: Info5){
      this.infos5Doc=this.afs.doc(`infos5/${infos5.id}`);
      this.infos5Doc.update(infos5);
    }

    deleteInfos5(infos5:Info5){
      this.infos5Doc=this.afs.doc(`infos5/${infos5.id}`);
      this.infos5Doc.delete();
    }




}