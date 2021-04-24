import { IReduxAction } from '../IRedux'

export const addItem = (item: any): IReduxAction => ({
  type: 'ADD_ITEM',
  payload: item
})
