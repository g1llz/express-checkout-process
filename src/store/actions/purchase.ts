import { IPurchase } from '../../interfaces/purchase'
import { IReduxAction } from '../IRedux'

export const addPurchase = (item: IPurchase): IReduxAction => ({
  type: 'ADD_PURCHASE',
  payload: item
})
