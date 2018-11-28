import { Component, OnInit } from '@angular/core';
import { Info6 } from '../model/info_grupa6.model';
import { InfoGrupa6Service } from '../services/info_grupa6.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-info-grupa6',
  templateUrl: './info-grupa6.component.html',
  styleUrls: ['./info-grupa6.component.css'],
  providers: [InfoGrupa6Service]
})
export class InfoGrupa6Component implements OnInit {

  items: Info6[];
    constructor(private infoGrupa6Service: InfoGrupa6Service,
      private toastr:ToastrService) {
  
     }
  
    ngOnInit() {
      this.infoGrupa6Service.getInfos6().subscribe(items =>{
        this.items=items;
      })
    }
  
    deleteInfos6(item:Info6){
      this.infoGrupa6Service.deleteInfos6(item);
      this.toastr.warning('Notatka została usunięta');
    }
  
  }


    