import { GetStaticProps } from 'next'
import { Fragment } from 'react'

import HeaderBar from '../components/HeaderBar'
import Product, { IProduct } from '../components/Product'

import { Container } from '../styles/elements/Container'
import { HSpacer } from '../styles/elements/HSpacer'
import { Text } from '../styles/elements/Text'

interface HomeProps {
  products: IProduct[]
}

export default function Home({ products }: HomeProps) {
  return (
    <Fragment>
      <HeaderBar />

      <HSpacer space="1rem"/>

      <Text>
        <h1>Products</h1>
      </Text>

      <HSpacer space="1rem"/>

      <Container>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </Container>
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const req = await fetch('http://localhost:3000/products.json')
  const data = await req.json()

  return {
    props: { products: data.products }
  }
}
