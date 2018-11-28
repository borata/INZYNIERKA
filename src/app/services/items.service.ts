import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "@angular/fire/database-deprecated";
import { AngularFireAuth } from 'angularfire2/auth';


export class Item {
  tresc: string;
  group: number;
}


@Injectable()
export class ItemService {
  addItem(item: Item): any {
    throw new Error("Method not implemented.");
  }
  updateItems(item: Item): any {
    throw new Error("Method not implemented.");
  }

  items: FirebaseListObservable<Item[]> = null;
  userId: string;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
  }


  // Return an observable list with optional query
  // You will usually call this from OnInit in a component
  getItemsList(): FirebaseListObservable<Item[]> {
    if (!this.userId) return;
    this.items = this.db.list(`items/${this.userId}`);
    return this.items
  }


  createItem(item: Item)  {
    this.items.push(item)
  }

}