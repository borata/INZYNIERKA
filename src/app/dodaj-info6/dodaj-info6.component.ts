
import { Component, OnInit } from '@angular/core';
import { InfoGrupa6Service } from '../services/info_grupa6.service';
import { Info6 } from '../model/info_grupa6.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-dodaj-info6',
  templateUrl: './dodaj-info6.component.html',
  styleUrls: ['./dodaj-info6.component.css'],
  providers: [InfoGrupa6Service]
})
export class DodajInfo6Component implements OnInit {

  item: Info6;
  infos6id: string;
  constructor(
    private infoGrupa6Service:InfoGrupa6Service, 
    private router: Router,
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private toastr: ToastrService){ }

  ngOnInit() {
    this.route.paramMap.subscribe(param=>{
      this.infos6id = param.get('id');
    });

    if (this.infos6id) {
      this.editInfos6(this.infos6id);
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
      if (this.infos6id){
        if (this.item.czas_trwania !==''){
          this.infoGrupa6Service.updateInfos6(this.item);
          this.toastr.success('Notatka została zaktualizowana');
          this.router.navigate(['info6']);
        }
        } else {
          if (this.item.czas_trwania !==''){
              this.infoGrupa6Service.addInfos6(this.item);
               this.toastr.success('Notatka została dodana');
               this.router.navigate(['info6']);
         }
    }
  }

  
   editInfos6(infos6id){
     this.afs.doc(`infos6/${infos6id}`).ref.get().then(function(doc){
       if (doc.exists) {
         console.log('Dokument istnieje');
         doc.data();
         const data = doc.data() as any;
         return {infos6id, ...data};
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