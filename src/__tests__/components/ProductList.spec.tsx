import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import theme from '../../styles/theme'
import ProductList from '../../components/ProductList'

const mockedProducts = [
  {
    id: 3,
    title: 'Test product 1',
    size: 'large',
    quantity: 2,
    price: 25.25,
    amount: 50.5
  },
  {
    id: 4,
    title: 'Test product 2',
    size: 'large',
    quantity: 1,
    price: 25.25,
    amount: 25.25
  }
]

describe(ProductList.name, () => {
  test('should display product list correctly', async () => {
    render(
      <ThemeProvider theme={theme}>
        <ProductList products={mockedProducts} amount={75.75} />
      </ThemeProvider>
    )

    expect(screen.getByTestId('product-list-component')).toBeInTheDocument()
    expect(screen.getByText('Test product 1')).toBeInTheDocument()
    expect(screen.getByText('Test product 2')).toBeInTheDocument()
    expect(screen.getByText('$75.75')).toBeInTheDocument()
  })
})
