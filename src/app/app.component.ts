import { Component, ViewEncapsulation } from '@angular/core'; 
// import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable, AngularFireDatabase } from '@angular/fire/database-deprecated';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'praca-inzynierska';
  products: any[];
}
