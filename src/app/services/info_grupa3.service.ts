import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {Info3} from '../model/info_grupa3.model';

@Injectable({
  providedIn: 'root'
})
export class InfoGrupa3Service {
  infos3Collection: AngularFirestoreCollection<Info3>;
  infos3: Observable<Info3[]>;
  info3: Info3;
  infos3Doc: AngularFirestoreDocument<Info3>;


  constructor(public afs: AngularFirestore) {
    this.infos3Collection = this.afs.collection('infos3', ref => ref.orderBy('id', 'desc')); 
    this.infos3 = this.infos3Collection.valueChanges();

   }

   getInfos3(){
     return this.infos3;
   }
   getInfo3(infos3id){
     this.afs.doc(`infos3/${infos3id}`).ref.get().then(function(doc){
       if (doc.exists){
         console.log('Dokument istnieje');
         doc.data();
         const data = doc.data() as any;
         return { infos3id, ...data};
       } else {
         console.log ('Nie ma takiego dokumentu');
       }
       
     }). catch(function (error){
       console.log('Błąd w pobieraniu dokumentu:', error);
     }).then(result => {
       this.info3 = result;
     }).catch(err=>{
       console.log('error');
     });
     return this.info3;
   }

    addInfos3(infos3: Info3){
      this.afs.collection('infos3').doc(infos3.id).set(infos3).then();
    }

    updateInfos3(infos3: Info3){
      this.infos3Doc=this.afs.doc(`infos3/${infos3.id}`);
      this.infos3Doc.update(infos3);
    }

    deleteInfos3(infos3:Info3){
      this.infos3Doc=this.afs.doc(`infos3/${infos3.id}`);
      this.infos3Doc.delete();
    }




}