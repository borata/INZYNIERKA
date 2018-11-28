
import { Component, OnInit } from '@angular/core';
import { InfoGrupa2Service } from '../services/info_grupa2.service';
import { Info2 } from '../model/info_grupa2.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'q';

@Component({
  selector: 'app-dodaj-info2',
  templateUrl: './dodaj-info2.component.html',
  styleUrls: ['./dodaj-info2.component.css'],
  providers: [InfoGrupa2Service]
})
export class DodajInfo2Component implements OnInit {

  item: Info2;
  infos2id: string;
  constructor(
    private infoGrupa2Service:InfoGrupa2Service, 
    private router: Router,
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private toastr: ToastrService){ }

  ngOnInit() {
    this.route.paramMap.subscribe(param=>{
      this.infos2id = param.get('id');
    });

    if (this.infos2id) {
      this.editInfos2(this.infos2id);
     } else {
      this.item = {
        czas_trwania: '',
        cel:'',
        godzina_daily: '',
        miejsce_daily: '', 
        review: new Date(),
        scrum_master: '',
        product_owner:'',
        id: '',
        trello: ''
      };

    }
  }
  
    onSubmit(){
      if (this.infos2id){
        if (this.item.czas_trwania !==''){
          this.infoGrupa2Service.updateInfos2(this.item);
          this.toastr.success('Notatka została zaktualizowana');
          this.router.navigate(['info2']);
        }
        } else {
          if (this.item.czas_trwania !==''){
              this.infoGrupa2Service.addInfos2(this.item);
               this.toastr.success('Notatka została dodana');
               this.router.navigate(['info2']);
         }
    }
  }

  
   editInfos2(infos2id){
     this.afs.doc(`infos2/${infos2id}`).ref.get().then(function(doc){
       if (doc.exists) {
         console.log('Dokument istnieje');
         doc.data();
         const data = doc.data() as any;
         return {infos2id, ...data};
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