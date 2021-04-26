export interface IReduxCart {
  products: {
    id: number
    title: string
    size: string
    quantity: number
    price: number
    amount: number
  }[]
  amount: number
}