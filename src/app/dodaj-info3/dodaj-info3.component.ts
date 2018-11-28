
import { Component, OnInit } from '@angular/core';
import { InfoGrupa3Service } from '../services/info_grupa3.service';
import { Info3 } from '../model/info_grupa3.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'q';

@Component({
  selector: 'app-dodaj-info3',
  templateUrl: './dodaj-info3.component.html',
  styleUrls: ['./dodaj-info3.component.css'],
  providers: [InfoGrupa3Service]
})
export class DodajInfo3Component implements OnInit {

  item: Info3;
  infos3id: string;
  constructor(
    private infoGrupa3Service:InfoGrupa3Service, 
    private router: Router,
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private toastr: ToastrService){ }

  ngOnInit() {
    this.route.paramMap.subscribe(param=>{
      this.infos3id = param.get('id');
    });

    if (this.infos3id) {
      this.editInfos3(this.infos3id);
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
      if (this.infos3id){
        if (this.item.czas_trwania !==''){
          this.infoGrupa3Service.updateInfos3(this.item);
          this.toastr.success('Notatka została zaktualizowana');
          this.router.navigate(['info3']);
        }
        } else {
          if (this.item.czas_trwania !==''){
              this.infoGrupa3Service.addInfos3(this.item);
               this.toastr.success('Notatka została dodana');
               this.router.navigate(['info3']);
         }
    }
  }

  
   editInfos3(infos3id){
     this.afs.doc(`infos3/${infos3id}`).ref.get().then(function(doc){
       if (doc.exists) {
         console.log('Dokument istnieje');
         doc.data();
         const data = doc.data() as any;
         return {infos3id, ...data};
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