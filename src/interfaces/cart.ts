export interface IReduxCart {
  products: IReduxCartProduct[]
  amount: number
}

export interface IReduxCartProduct {
  id: number
  title: string
  size: string
  quantity: number
  price: number
  amount: number
}
