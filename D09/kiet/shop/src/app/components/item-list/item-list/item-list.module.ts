import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemListRoutingModule } from './item-list-routing.module';
import { ItemListComponent } from './item-list.component';
import { ItemComponent } from '../item/item.component';



@NgModule({
  declarations: [ItemListComponent,ItemComponent],
  imports: [
    CommonModule,
    ItemListRoutingModule
  ]
})
export class ItemListModule { }
