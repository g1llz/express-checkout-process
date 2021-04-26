import { HYDRATE } from 'next-redux-wrapper'
import { IProduct } from '../../interfaces/product'
import { IReduxAction } from '../IRedux'

const initialState = {
  products: [],
  amount: 0
}

const sumProducts = (products: Partial<IProduct[]>) =>
  products.reduce((acc: number, item: any) => {
    return acc + item.amount
  }, 0)

const reducer = (state = initialState, action: IReduxAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.cart }
    case 'RESET_CART':
      return { ...initialState }
    case 'ADD_ITEM_CART':
      const updated = {
        ...state,
        products: [...state.products, action.payload]
      }
      return {
        ...updated,
        amount: Number(sumProducts(updated.products).toFixed(2))
      }
    default:
      return state
  }
}

export default reducer
