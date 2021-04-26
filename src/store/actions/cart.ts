import { IReduxCartProduct } from '../../interfaces/cart'
import { IReduxAction } from '../IRedux'

export const addItem = (item: IReduxCartProduct): IReduxAction => ({
  type: 'ADD_ITEM_CART',
  payload: item
})

export const resetCart = (): IReduxAction => ({
  type: 'RESET_CART'
})
