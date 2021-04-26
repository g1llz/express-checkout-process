import { Fragment } from 'react'
import { useRouter } from 'next/router'

import Form from '../components/Form'

import HeaderBar from '../components/HeaderBar'
import { useCart } from '../hooks/use-cart'

import { Container } from '../styles/elements/Container'
import { HSpacer } from '../styles/elements/HSpacer'
import { Title } from '../styles/elements/Title'
import { Button } from '../styles/elements/Button'
import { Flex } from '../styles/elements/Flex'
import ProductList from '../components/ProductList'

export default function Checkout() {
  const { products, amount } = useCart()
  const router = useRouter()

  return (
    <Fragment>
      <HeaderBar />

      <HSpacer space="1rem" />

      <Title>Checkout</Title>

      <HSpacer space="1rem" />

      <Container>
        {!products.length && (
          <Flex direction="column" content="center">
            <h2>Your cart is empty!</h2>
            <HSpacer />
            <Button onClick={() => router.push('/')}>Go back to shop</Button>
          </Flex>
        )}

        {!!products.length && (
          <Flex direction="column">
            <ProductList products={products} amount={amount} />

            <HSpacer />

            <Form
              onCancel={() => router.push('/')}
              onSubmit={() => router.push('/success')}
            />
          </Flex>
        )}
      </Container>
    </Fragment>
  )
}
