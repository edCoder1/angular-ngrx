import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ShoppingReducer } from './store/reducers/shopping.reducer';
import { ShopListComponent } from './shop-list/shop-list.component';

import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ShopListComponent],
  imports: [
    CommonModule,

    FormsModule,

    // store import
    StoreModule.forFeature('shop', {
      shopping: ShoppingReducer
    })
    // StoreModule.forFeature('Shop', {
    //   shopping: ShoppingReducer
    // })
  ],
  exports: [ShopListComponent]
})
export class ShopModule { }
