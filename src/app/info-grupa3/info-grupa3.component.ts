import { Component, OnInit } from '@angular/core';
import { Info3 } from '../model/info_grupa3.model';
import { InfoGrupa3Service } from '../services/info_grupa3.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-info-grupa3',
  templateUrl: './info-grupa3.component.html',
  styleUrls: ['./info-grupa3.component.css'],
  providers: [InfoGrupa3Service]
})
export class InfoGrupa3Component implements OnInit {

  items: Info3[];
    constructor(private infoGrupa3Service: InfoGrupa3Service,
      private toastr:ToastrService) {
  
     }
  
    ngOnInit() {
      this.infoGrupa3Service.getInfos3().subscribe(items =>{
        this.items=items;
      })
    }
  
    deleteInfos3(item:Info3){
      this.infoGrupa3Service.deleteInfos3(item);
      this.toastr.warning('Notatka została usunięta');
    }
  
  }


    