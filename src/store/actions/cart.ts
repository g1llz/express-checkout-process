import { IReduxAction } from '../IRedux'

export const addItem = (item: any): IReduxAction => ({
  type: 'ADD_ITEM_CART',
  payload: item
})

export const resetCart = (): IReduxAction => ({
  type: 'RESET_CART'
})
