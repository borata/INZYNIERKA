import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wiki-nexus',
  templateUrl: './wiki-nexus.component.html',
  styleUrls: ['./wiki-nexus.component.css']
})
export class WikiNexusComponent implements OnInit { images = [1, 2, 3].map(() => `https://picsum.photos/1500/300?random&t=${Math.random()}`)
  
  currentJustify = 'start';

  constructor() { }

  ngOnInit() {
  }

}
//images = [1, 2, 3].map(() => `https://picsum.photos/1500/300?random&t=${Math.random()}`)