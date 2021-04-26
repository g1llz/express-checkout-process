import { useSelector } from 'react-redux'
import { IPurchase } from '../interfaces/purchase'

export function usePurchase() {
  return useSelector((state: { purchase: IPurchase }) => state.purchase)
}
