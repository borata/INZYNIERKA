import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wiki-nexus-trzy',
  templateUrl: './wiki-nexus-trzy.component.html',
  styleUrls: ['./wiki-nexus-trzy.component.css']
})
export class WikiNexusTrzyComponent implements OnInit { images = [1, 2, 3].map(() => `https://picsum.photos/1500/300?random&t=${Math.random()}`)
  
currentJustify = 'start';

constructor() { }

ngOnInit() {
}

}
