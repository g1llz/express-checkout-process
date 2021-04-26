import { IReduxCartProduct } from "./cart";
import { IFormInput } from "./form";

export interface IPurchase {
  products: IReduxCartProduct[]
  shipping: IFormInput
}
