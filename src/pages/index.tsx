import { GetStaticProps } from 'next'
import { Fragment } from 'react'

import HeaderBar from '../components/HeaderBar'
import ProductList from '../components/ProductList'

import { Container } from '../styles/elements/Container'
import { Space } from '../styles/elements/Space'

export default function Home({ products }) {
  return (
    <Fragment>
      <HeaderBar />

      <Space />

      <Container>
        <ProductList products={products} />
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
