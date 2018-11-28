
import { Component, OnInit } from '@angular/core';
import { InfoGrupa1Service } from '../services/info_grupa1.service';
import { Info1 } from '../model/info_grupa1.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'q';

@Component({
  selector: 'app-dodaj-info1',
  templateUrl: './dodaj-info1.component.html',
  styleUrls: ['./dodaj-info1.component.css'],
  providers: [InfoGrupa1Service]
})
export class DodajInfo1Component implements OnInit {

  item: Info1;
  infos1id: string;
  constructor(
    private infoGrupa1Service:InfoGrupa1Service, 
    private router: Router,
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private toastr: ToastrService){ }

  ngOnInit() {
    this.route.paramMap.subscribe(param=>{
      this.infos1id = param.get('id');
    });

    if (this.infos1id) {
      this.editInfos1(this.infos1id);
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
      if (this.infos1id){
        if (this.item.czas_trwania !==''){
          this.infoGrupa1Service.updateInfos1(this.item);
          this.toastr.success('Notatka została zaktualizowana');
          this.router.navigate(['info1']);
        }
        } else {
          if (this.item.czas_trwania !==''){
              this.infoGrupa1Service.addInfos1(this.item);
               this.toastr.success('Notatka została dodana');
               this.router.navigate(['info1']);
         }
    }
  }

  
   editInfos1(infos1id){
     this.afs.doc(`infos1/${infos1id}`).ref.get().then(function(doc){
       if (doc.exists) {
         console.log('Dokument istnieje');
         doc.data();
         const data = doc.data() as any;
         return {infos1id, ...data};
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