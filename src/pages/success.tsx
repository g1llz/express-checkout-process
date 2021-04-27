import Head from 'next/head'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import HeaderBar from '../components/HeaderBar'
import ProductList from '../components/ProductList'

import { usePurchase } from '../hooks/use-purchase'
import { resetPurchase } from '../store/actions/purchase'

import { Button } from '../styles/elements/Button'
import { Container } from '../styles/elements/Container'
import { Flex } from '../styles/elements/Flex'
import { HSpacer } from '../styles/elements/HSpacer'
import { WrapperList } from '../styles/elements/Wrapper'

export default function Success() {
  const { products, shipping } = usePurchase()
  const router = useRouter()
  const dispatch = useDispatch()

  const sumProducts = () =>
    products.reduce((acc: number, item: any) => {
      return acc + item.amount
    }, 0)

  const handleBackHome = () => {
    dispatch(resetPurchase())
    router.push('/')
  }

  return (
    <Fragment>
      <Head>
        <title>HousePlant | Success!</title>
      </Head>

      <HeaderBar />

      <HSpacer space="1rem" />

      <Flex direction="column">
        <FontAwesomeIcon icon={faCheckCircle} size="3x" color="#1c923a" />
        <HSpacer space="0.5rem" />
        <h1>Success!</h1>
      </Flex>

      <HSpacer />

      <Container>
        {!!products.length && (
          <Flex direction="column" data-pages="success">
            <p>
              Your order has been completed. Don't worry, now all the
              information will be sent in the registered email.
            </p>

            <HSpacer />

            <h3>Order resume</h3>

            <HSpacer space="1rem" />

            <WrapperList textColor="#dce3e7" bgColor="#1c923a" padding="10px">
              <ProductList
                products={products}
                amount={Number(sumProducts().toFixed(2))}
              />
            </WrapperList>

            <HSpacer />

            <Flex
              direction="column"
              content="flex-start"
              alignItems="end"
            >
              <span>Name</span>
              <h4>{shipping.fullName}</h4>

              <HSpacer space="0.5rem" />

              <span>E-mail</span>
              <h4>{shipping.email}</h4>

              <HSpacer space="0.5rem" />

              <span>Address</span>
              <h4>{shipping.address}</h4>

              <HSpacer space="0.5rem" />

              <span>Country</span>
              <h4>{shipping.country}</h4>

              <HSpacer space="0.5rem" />

              <span>Postal code</span>
              <h4>{shipping.zipCode}</h4>

              <HSpacer space="0.5rem" />

              <span>Phone number</span>
              <h4>{shipping.phone}</h4>
            </Flex>

            <HSpacer />

            <Button onClick={handleBackHome}>Go back to shop</Button>
            <HSpacer />
          </Flex>
        )}
      </Container>
    </Fragment>
  )
}
