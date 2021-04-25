import { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { resetCart } from '../store/actions/cart'

import { Box } from '../styles/elements/Box'
import { Flex } from '../styles/elements/Flex'
import { List, ListItem } from '../styles/elements/List'
import { SummaryWrapper } from '../styles/elements/SummaryWrapper'
import { HSpacer } from '../styles/elements/HSpacer'
import { Button, CircleButton } from '../styles/elements/Button'

interface ICart {
  products: [
    {
      id: number
      title: string
      size: string
      quantity: number
      price: number
      amount: number
    }
  ]
  amount: number
}

export default function Cart() {
  const [toggle, setToggle] = useState(false)
  const dispatch = useDispatch()
  const { products, amount } = useSelector(
    (state: { cart: ICart }) => state.cart
  )

  return (
    <Fragment>
      <CircleButton bgColor="#0E5C22" opacity={0.7} onClick={() => setToggle(!toggle)}>
        <span style={{ marginRight: 5 }} data-testid="count-products">
          {products.length}
        </span>
        <FontAwesomeIcon icon={faShoppingCart} data-testid="cart-icon" />
      </CircleButton>

      {toggle && (
        <SummaryWrapper data-testid="cart-summary">
          <Box width="300px">
            <List>
              {products.map(product => (
                <ListItem key={product.id}>
                  <Flex>
                    <span>
                      {product.quantity}x <strong>{product.title}</strong>
                    </span>
                    <span>{product.amount}</span>
                  </Flex>
                </ListItem>
              ))}
            </List>

            <HSpacer space="1rem" />

            <Flex>
              <span>Total</span>
              <h2>${amount}</h2>
            </Flex>

            <HSpacer />

            <Flex content="flex-end">
              <Button
                maxWidth="200px"
                bgColor="transparent"
                textColor="#0d2020"
                onClick={() => dispatch(resetCart())}
              >
                Clear
              </Button>
              <Button maxWidth="200px">Go to checkout</Button>
            </Flex>
          </Box>
        </SummaryWrapper>
      )}
    </Fragment>
  )
}
