import { useSelector } from 'react-redux'
import { IReduxCart } from '../interfaces/cart'

export function useCart() {
  return useSelector((state: { cart: IReduxCart }) => state.cart)
}
