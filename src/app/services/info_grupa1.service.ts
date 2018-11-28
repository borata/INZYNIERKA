import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {Info1} from '../model/info_grupa1.model';

@Injectable({
  providedIn: 'root'
})
export class InfoGrupa1Service {
  infos1Collection: AngularFirestoreCollection<Info1>;
  infos1: Observable<Info1[]>;
  info1: Info1;
  infos1Doc: AngularFirestoreDocument<Info1>;


  constructor(public afs: AngularFirestore) {
    this.infos1Collection = this.afs.collection('infos1', ref => ref.orderBy('id', 'desc')); 
    this.infos1 = this.infos1Collection.valueChanges();

   }

   getInfos1(){
     return this.infos1;
   }
   getInfo1(infos1id){
     this.afs.doc(`infos1/${infos1id}`).ref.get().then(function(doc){
       if (doc.exists){
         console.log('Dokument istnieje');
         doc.data();
         const data = doc.data() as any;
         return { infos1id, ...data};
       } else {
         console.log ('Nie ma takiego dokumentu');
       }
       
     }). catch(function (error){
       console.log('Błąd w pobieraniu dokumentu:', error);
     }).then(result => {
       this.info1 = result;
     }).catch(err=>{
       console.log('error');
     });
     return this.info1;
   }

    addInfos1(infos1: Info1){
      this.afs.collection('infos1').doc(infos1.id).set(infos1).then();
    }

    updateInfos1(infos1: Info1){
      this.infos1Doc=this.afs.doc(`infos1/${infos1.id}`);
      this.infos1Doc.update(infos1);
    }

    deleteInfos1(infos1:Info1){
      this.infos1Doc=this.afs.doc(`infos1/${infos1.id}`);
      this.infos1Doc.delete();
    }




}