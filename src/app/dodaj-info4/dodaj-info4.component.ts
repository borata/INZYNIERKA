
import { Component, OnInit } from '@angular/core';
import { InfoGrupa4Service } from '../services/info_grupa4.service';
import { Info4 } from '../model/info_grupa4.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'q';

@Component({
  selector: 'app-dodaj-info4',
  templateUrl: './dodaj-info4.component.html',
  styleUrls: ['./dodaj-info4.component.css'],
  providers: [InfoGrupa4Service]
})
export class DodajInfo4Component implements OnInit {

  item: Info4;
  infos4id: string;
  constructor(
    private infoGrupa4Service:InfoGrupa4Service, 
    private router: Router,
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private toastr: ToastrService){ }

  ngOnInit() {
    this.route.paramMap.subscribe(param=>{
      this.infos4id = param.get('id');
    });

    if (this.infos4id) {
      this.editInfos4(this.infos4id);
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
      if (this.infos4id){
        if (this.item.czas_trwania !==''){
          this.infoGrupa4Service.updateInfos4(this.item);
          this.toastr.success('Notatka została zaktualizowana');
          this.router.navigate(['info4']);
        }
        } else {
          if (this.item.czas_trwania !==''){
              this.infoGrupa4Service.addInfos4(this.item);
               this.toastr.success('Notatka została dodana');
               this.router.navigate(['info4']);
         }
    }
  }

  
   editInfos4(infos4id){
     this.afs.doc(`infos4/${infos4id}`).ref.get().then(function(doc){
       if (doc.exists) {
         console.log('Dokument istnieje');
         doc.data();
         const data = doc.data() as any;
         return {infos4id, ...data};
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