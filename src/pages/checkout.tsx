import Head from 'next/head'
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDolly } from '@fortawesome/free-solid-svg-icons'

import Form from '../components/Form'
import HeaderBar from '../components/HeaderBar'
import ProductList from '../components/ProductList'

import { useCart } from '../hooks/use-cart'
import { resetCart } from '../store/actions/cart'

import { Container } from '../styles/elements/Container'
import { HSpacer } from '../styles/elements/HSpacer'
import { Button } from '../styles/elements/Button'
import { Flex } from '../styles/elements/Flex'
import { WrapperList } from '../styles/elements/Wrapper'

import { IFormInput } from '../interfaces/form'
import { addPurchase } from '../store/actions/purchase'

export default function Checkout() {
  const { products, amount } = useCart()
  const router = useRouter()
  const dispatch = useDispatch()

  const handleSubmit = (data: IFormInput) => {
    dispatch(
      addPurchase({
        products,
        shipping: data
      })
    )
    dispatch(resetCart())
    
    router.push('/success')
  }

  return (
    <Fragment>
      <Head>
        <title>HousePlant | Checkout</title>
      </Head>

      <HeaderBar />

      <HSpacer space="1rem" />

      <Flex direction="column">
        <FontAwesomeIcon icon={faDolly} size="3x" color="#1c923a" />
        <HSpacer space="0.5rem" />
        <h1>Checkout</h1>
      </Flex>

      <HSpacer space="1rem" />

      <Container>
        {!products.length && (
          <Flex direction="column" data-pages="checkout-no-product">
            <h2>Your cart is empty!</h2>
            <HSpacer />
            <Button onClick={() => router.push('/')}>Go back to shop</Button>
          </Flex>
        )}

        {!!products.length && (
          <Flex direction="column" data-pages="checkout-product">
            <p>
              Almost there! Fill out the form with shipping and contact
              information.
            </p>

            <HSpacer />

            <WrapperList textColor="#dce3e7" bgColor="#1c923a" padding="10px">
              <ProductList products={products} amount={amount} />
            </WrapperList>

            <HSpacer />

            <Form onCancel={() => router.push('/')} onSubmit={handleSubmit} />
          </Flex>
        )}
      </Container>
    </Fragment>
  )
}
