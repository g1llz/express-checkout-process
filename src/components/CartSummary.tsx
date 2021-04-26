import ProductList from './ProductList'

import { Flex } from '../styles/elements/Flex'
import { SummaryWrapper } from '../styles/elements/SummaryWrapper'
import { HSpacer } from '../styles/elements/HSpacer'
import { Button } from '../styles/elements/Button'

import { IReduxCart } from '../interfaces/cart'

interface SummaryProps extends IReduxCart {
  onResetCart: () => void
  onCheckout: () => void
}

export default function CartSummary({
  products,
  amount,
  onResetCart,
  onCheckout
}: SummaryProps) {
  return (
    <SummaryWrapper data-testid="cart-summary">
      <Flex direction="column">
        <ProductList products={products} amount={amount} />

        <HSpacer />

        <Flex content="flex-end">
          <Button
            maxWidth="200px"
            bgColor="transparent"
            textColor="#0d2020"
            onClick={onResetCart}
          >
            Clear
          </Button>
          <Button maxWidth="200px" onClick={onCheckout} disabled={!products.length}>
            Go to checkout
          </Button>
        </Flex>
      </Flex>
    </SummaryWrapper>
  )
}
