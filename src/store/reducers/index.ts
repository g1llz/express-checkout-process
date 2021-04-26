import { combineReducers } from 'redux'

import cartReducer from './cart'
import purchaseReducer from './purchase'

export default combineReducers({
  cart: cartReducer,
  purchase: purchaseReducer
})
