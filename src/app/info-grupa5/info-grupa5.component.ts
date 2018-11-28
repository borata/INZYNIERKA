import { Component, OnInit } from '@angular/core';
import { Info5 } from '../model/info_grupa5.model';
import { InfoGrupa5Service } from '../services/info_grupa5.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-info-grupa5',
  templateUrl: './info-grupa5.component.html',
  styleUrls: ['./info-grupa5.component.css'],
  providers: [InfoGrupa5Service]
})
export class InfoGrupa5Component implements OnInit {

  items: Info5[];
    constructor(private infoGrupa5Service: InfoGrupa5Service,
      private toastr:ToastrService) {
  
     }
  
    ngOnInit() {
      this.infoGrupa5Service.getInfos5().subscribe(items =>{
        this.items=items;
      })
    }
  
    deleteInfos5(item:Info5){
      this.infoGrupa5Service.deleteInfos5(item);
      this.toastr.warning('Notatka została usunięta');
    }
  
  }


    