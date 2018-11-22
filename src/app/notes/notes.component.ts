import { Component, OnInit } from '@angular/core';
import { Notes } from '../model/notes.model';
import { NotesService } from '../services/notes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers: [NotesService]
})
export class NotesComponent implements OnInit {
  items: Notes[];
  constructor(private notesService: NotesService,
    private toastr:ToastrService) {

   }

  ngOnInit() {
    this.notesService.getNotes().subscribe(items =>{
      this.items=items;
    })
  }

  deleteNotes(item:Notes){
    this.notesService.deleteNotes(item);
    this.toastr.warning('Notatka została usunięta');
  }

}
