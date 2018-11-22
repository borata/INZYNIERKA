import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {Notes} from '../model/notes.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notesCollection: AngularFirestoreCollection<Notes>;
  notes: Observable<Notes[]>;
  item: Notes;
  notesDoc: AngularFirestoreDocument<Notes>;


  constructor(public afs: AngularFirestore) {
    this.notesCollection = this.afs.collection('notes', ref => ref.orderBy('nr_Sprintu', 'desc')); 
    this.notes = this.notesCollection.valueChanges();

   }

   getNotes(){
     return this.notes;
   }
   getNote(notesid){
     this.afs.doc(`notes/${notesid}`).ref.get().then(function(doc){
       if (doc.exists){
         console.log('Dokument istnieje');
         doc.data();
         const data = doc.data() as any;
         return { notesid, ...data};
       } else {
         console.log ('Nie ma takiego dokumentu');
       }
       
     }). catch(function (error){
       console.log('Błąd w pobieraniu dokumentu:', error);
     }).then(result => {
       this.item = result;
     }).catch(err=>{
       console.log('error');
     });
     return this.item;
   }

    addNotes(notes: Notes){
      this.afs.collection('notes').doc(notes.id).set(notes).then();
    }

    updateNotes(notes: Notes){
      this.notesDoc=this.afs.doc(`notes/${notes.id}`);
      this.notesDoc.update(notes);
    }

    deleteNotes(notes:Notes){
      this.notesDoc=this.afs.doc(`notes/${notes.id}`);
      this.notesDoc.delete();
    }




}
