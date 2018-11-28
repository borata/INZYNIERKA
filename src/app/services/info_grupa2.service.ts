import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {Info2} from '../model/info_grupa2.model';

@Injectable({
  providedIn: 'root'
})
export class InfoGrupa2Service {
  infos2Collection: AngularFirestoreCollection<Info2>;
  infos2: Observable<Info2[]>;
  info2: Info2;
  infos2Doc: AngularFirestoreDocument<Info2>;


  constructor(public afs: AngularFirestore) {
    this.infos2Collection = this.afs.collection('infos2', ref => ref.orderBy('id', 'desc')); 
    this.infos2 = this.infos2Collection.valueChanges();

   }

   getInfos2(){
     return this.infos2;
   }
   getInfo2(infos2id){
     this.afs.doc(`infos2/${infos2id}`).ref.get().then(function(doc){
       if (doc.exists){
         console.log('Dokument istnieje');
         doc.data();
         const data = doc.data() as any;
         return { infos2id, ...data};
       } else {
         console.log ('Nie ma takiego dokumentu');
       }
       
     }). catch(function (error){
       console.log('Błąd w pobieraniu dokumentu:', error);
     }).then(result => {
       this.info2 = result;
     }).catch(err=>{
       console.log('error');
     });
     return this.info2;
   }

    addInfos2(infos2: Info2){
      this.afs.collection('infos2').doc(infos2.id).set(infos2).then();
    }

    updateInfos2(infos2: Info2){
      this.infos2Doc=this.afs.doc(`infos2/${infos2.id}`);
      this.infos2Doc.update(infos2);
    }

    deleteInfos2(infos2:Info2){
      this.infos2Doc=this.afs.doc(`infos2/${infos2.id}`);
      this.infos2Doc.delete();
    }




}