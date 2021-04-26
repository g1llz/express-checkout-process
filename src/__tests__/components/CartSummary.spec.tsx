import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import userEvent from '@testing-library/user-event'

import theme from '../../styles/theme'
import CartSumamary from '../../components/CartSummary'

const mockedProducts = [
  {
    id: 3,
    title: 'Test product',
    size: 'large',
    quantity: 2,
    price: 25.25,
    amount: 50.5
  }
]

describe(CartSumamary.name, () => {
  test('should display checkout button disabled when products is empty', async () => {
    const reset = jest.fn()
    const checkout = jest.fn()

    render(
      <ThemeProvider theme={theme}>
        <CartSumamary
          onResetCart={reset}
          onCheckout={checkout}
          products={[]}
          amount={0}
        />
      </ThemeProvider>
    )

    const button = screen.getByText('Go to checkout').closest('button')
    userEvent.click(button)
    expect(checkout).toBeCalledTimes(0)

    expect(button).toHaveAttribute('disabled')
  })

  test('should display products correctly', async () => {
    const reset = jest.fn()
    const checkout = jest.fn()

    render(
      <ThemeProvider theme={theme}>
        <CartSumamary
          onResetCart={reset}
          onCheckout={checkout}
          products={mockedProducts}
          amount={mockedProducts[0].amount}
        />
      </ThemeProvider>
    )

    expect(screen.getByText('Test product')).toBeInTheDocument()
    expect(screen.getByText('2x')).toBeInTheDocument()
    expect(screen.getByText('$50.5')).toBeInTheDocument()
  })

  test('should be call checkout method when has products', async () => {
    const reset = jest.fn()
    const checkout = jest.fn()

    render(
      <ThemeProvider theme={theme}>
        <CartSumamary
          onResetCart={reset}
          onCheckout={checkout}
          products={mockedProducts}
          amount={mockedProducts[0].amount}
        />
      </ThemeProvider>
    )

    const button = screen.getByText('Go to checkout').closest('button')
    userEvent.click(button)
    expect(checkout).toBeCalledTimes(1)
  })

  test('should be call reset method after clicked', async () => {
    const reset = jest.fn()
    const checkout = jest.fn()

    render(
      <ThemeProvider theme={theme}>
        <CartSumamary
          onResetCart={reset}
          onCheckout={checkout}
          products={mockedProducts}
          amount={mockedProducts[0].amount}
        />
      </ThemeProvider>
    )

    const checkoutButton = screen.getByText('Go to checkout').closest('button')
    const clearButton = screen.getByText('Clear').closest('button')

    expect(checkoutButton).not.toHaveAttribute('disabled')

    userEvent.click(clearButton)
    expect(reset).toBeCalledTimes(1)
  })
})
