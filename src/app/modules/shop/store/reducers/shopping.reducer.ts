import { ShoppingItem } from "../models/sopping-item.model";
import { ShoppinngAction, ShoppingActionTypes } from '../actions/sopping.action';

const initialState: Array<ShoppingItem> = [
    {
        id: 'uniqueId-n1',
        name: 'Diet Coke'
    }
];

export function ShoppingReducer(
    state: Array<ShoppingItem> = initialState,
    action: ShoppinngAction
) {
    switch (action.type) {
        case ShoppingActionTypes.ADD_ITEM:
            return [...state, action.payload];

        case ShoppingActionTypes.DELETE_ITEM:
            return state.filter(item => item.id !== action.payload);

        default:
            return state
    }
}