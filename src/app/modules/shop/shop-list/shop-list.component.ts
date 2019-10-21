import { ShopListState } from '../store/models/shopping-list.model';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


import { ShoppingItem } from '../store/models/sopping-item.model';
import { v4 as uuid } from 'uuid';
import { AddItemAction } from '../store/actions/sopping.action';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.sass']
})
export class ShopListComponent implements OnInit {

  shoppingItems$: Observable<Array<ShoppingItem>>;
  newShoppingItem: ShoppingItem = { id: '', name: '' };

  constructor(private store: Store<ShopListState>) { }

  ngOnInit() {
    this.shoppingItems$ = this.store.select(store => store.shopping)
  }

  addItem() {
    this.newShoppingItem.id = uuid();
    this.store.dispatch(new AddItemAction(this.newShoppingItem));
    this.newShoppingItem = { id: '', name: '' }
  }

}
