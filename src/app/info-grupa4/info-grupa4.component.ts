import { Component, OnInit } from '@angular/core';
import { Info4 } from '../model/info_grupa4.model';
import { InfoGrupa4Service } from '../services/info_grupa4.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-info-grupa4',
  templateUrl: './info-grupa4.component.html',
  styleUrls: ['./info-grupa4.component.css'],
  providers: [InfoGrupa4Service]
})
export class InfoGrupa4Component implements OnInit {

  items: Info4[];
    constructor(private infoGrupa4Service: InfoGrupa4Service,
      private toastr:ToastrService) {
  
     }
  
    ngOnInit() {
      this.infoGrupa4Service.getInfos4().subscribe(items =>{
        this.items=items;
      })
    }
  
    deleteInfos4(item:Info4){
      this.infoGrupa4Service.deleteInfos4(item);
      this.toastr.warning('Notatka została usunięta');
    }
  
  }


    