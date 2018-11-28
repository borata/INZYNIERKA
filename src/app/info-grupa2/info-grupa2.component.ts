import { Component, OnInit } from '@angular/core';
import { Info2 } from '../model/info_grupa2.model';
import { InfoGrupa2Service } from '../services/info_grupa2.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-info-grupa2',
  templateUrl: './info-grupa2.component.html',
  styleUrls: ['./info-grupa2.component.css'],
  providers: [InfoGrupa2Service]
})
export class InfoGrupa2Component implements OnInit {

  items: Info2[];
    constructor(private infoGrupa2Service: InfoGrupa2Service,
      private toastr:ToastrService) {
  
     }
  
    ngOnInit() {
      this.infoGrupa2Service.getInfos2().subscribe(items =>{
        this.items=items;
      })
    }
  
    deleteInfos2(item:Info2){
      this.infoGrupa2Service.deleteInfos2(item);
      this.toastr.warning('Notatka została usunięta');
    }
  
  }


    