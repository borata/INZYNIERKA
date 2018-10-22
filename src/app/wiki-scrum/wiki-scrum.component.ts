import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wiki-scrum',
  templateUrl: './wiki-scrum.component.html',
  styleUrls: ['./wiki-scrum.component.css']
})
export class WikiScrumComponent implements OnInit { images = [1, 2, 3].map(() => `https://picsum.photos/1500/300?random&t=${Math.random()}`);
  
  currentJustify = 'start';

  constructor() { }

  ngOnInit() {
  }

}
