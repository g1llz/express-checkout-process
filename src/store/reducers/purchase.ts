import { HYDRATE } from 'next-redux-wrapper'
import { IReduxAction } from '../IRedux'

const initialState = {
  products: [],
  shipping: null
}

const reducer = (state = initialState, action: IReduxAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.purchase }
    case 'RESET_PURCHASE':
      return { ...initialState }
    case 'ADD_PURCHASE':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default reducer
