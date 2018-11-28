import { Component, OnInit } from '@angular/core';
import { Info1 } from '../model/info_grupa1.model';
import { InfoGrupa1Service } from '../services/info_grupa1.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-info-grupa1',
  templateUrl: './info-grupa1.component.html',
  styleUrls: ['./info-grupa1.component.css'],
  providers: [InfoGrupa1Service]
})
export class InfoGrupa1Component implements OnInit {

  items: Info1[];
    constructor(private infoGrupa1Service: InfoGrupa1Service,
      private toastr:ToastrService) {
  
     }
  
    ngOnInit() {
      this.infoGrupa1Service.getInfos1().subscribe(items =>{
        this.items=items;
      })
    }
  
    deleteInfos1(item:Info1){
      this.infoGrupa1Service.deleteInfos1(item);
      this.toastr.warning('Notatka została usunięta');
    }
  
  }


    