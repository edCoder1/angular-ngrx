import { ShoppingItem } from '../../modules/shop/store/models/sopping-item.model';

export interface AppState {
    readonly shopping: Array<ShoppingItem>
}