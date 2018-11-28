
import { Component, OnInit } from '@angular/core';
import { InfoGrupa5Service } from '../services/info_grupa5.service';
import { Info5 } from '../model/info_grupa5.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'q';

@Component({
  selector: 'app-dodaj-info5',
  templateUrl: './dodaj-info5.component.html',
  styleUrls: ['./dodaj-info5.component.css'],
  providers: [InfoGrupa5Service]
})
export class DodajInfo5Component implements OnInit {

  item: Info5;
  infos5id: string;
  constructor(
    private infoGrupa5Service:InfoGrupa5Service, 
    private router: Router,
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private toastr: ToastrService){ }

  ngOnInit() {
    this.route.paramMap.subscribe(param=>{
      this.infos5id = param.get('id');
    });

    if (this.infos5id) {
      this.editInfos5(this.infos5id);
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
      if (this.infos5id){
        if (this.item.czas_trwania !==''){
          this.infoGrupa5Service.updateInfos5(this.item);
          this.toastr.success('Notatka została zaktualizowana');
          this.router.navigate(['info5']);
        }
        } else {
          if (this.item.czas_trwania !==''){
              this.infoGrupa5Service.addInfos5(this.item);
               this.toastr.success('Notatka została dodana');
               this.router.navigate(['info5']);
         }
    }
  }

  
   editInfos5(infos5id){
     this.afs.doc(`infos5/${infos5id}`).ref.get().then(function(doc){
       if (doc.exists) {
         console.log('Dokument istnieje');
         doc.data();
         const data = doc.data() as any;
         return {infos5id, ...data};
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