import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { Notes } from '../model/notes.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-dodaj-notatke',
  templateUrl: './dodaj-notatke.component.html',
  styleUrls: ['./dodaj-notatke.component.css'],
  providers: [NotesService]
})
export class DodajNotatkeComponent implements OnInit {
  item: Notes;
  notesid: string;
  constructor(
    private notesService:NotesService, 
    private router: Router,
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private toastr: ToastrService){ }

  ngOnInit() {
    this.route.paramMap.subscribe(param=>{
      this.notesid = param.get('id');
    });

    if (this.notesid) {
      this.editNotes(this.notesid);
     } else {
      this.item = {
        skryba:'',
        tresc:'',
        nr_Sprintu: 1, 
        data: new Date(),
        id: ''
      };

    }
  }

    onSubmit(){
      if (this.notesid){
        if (this.item.skryba !==''){
          this.notesService.updateNotes(this.item);
          this.toastr.success('Notatka została zaktualizowana');
          this.router.navigate(['notes']);
        }
        } else {
          if (this.item.skryba !==''){
              this.notesService.addNotes(this.item);
               this.toastr.success('Notatka została dodana');
               this.router.navigate(['notes']);
         }
    }
  }

  
   editNotes(notesid){
     this.afs.doc(`notes/${notesid}`).ref.get().then(function(doc){
       if (doc.exists) {
         console.log('Dokument istnieje');
         doc.data();
         const data = doc.data() as any;
         return {notesid, ...data};
       } else {
         console.log('Nie ma takiego dokumentu');
       }
     }).catch(function(error){
       console.log('Nie można pobrać dokumentu:', error);
     }).then (result => {
       this.item = result;
     }).catch(err=>{
       console.log('error');
     });
  
   }

  
  }