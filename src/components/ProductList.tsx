import { Fragment } from 'react'

import { IReduxCart } from '../interfaces/cart'

import { Flex } from '../styles/elements/Flex'
import { HSpacer } from '../styles/elements/HSpacer'
import { List, ListItem } from '../styles/elements/List'

interface ProductListProps extends IReduxCart {}

export default function ProductList({ products, amount }: ProductListProps) {
  return (
    <Fragment>
      <List data-testid="product-list-component">
        {products.map(product => (
          <ListItem key={product.id}>
            <Flex>
              <span>
                {product.quantity}x <strong>{product.title}</strong>
              </span>
              <span>{product.amount.toFixed(2)}</span>
            </Flex>
          </ListItem>
        ))}
      </List>

      <HSpacer space="1rem" />

      <Flex>
        <span>Total</span>
        <h2>${amount.toFixed(2)}</h2>
      </Flex>
    </Fragment>
  )
}
