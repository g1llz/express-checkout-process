import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import userEvent from '@testing-library/user-event'

import theme from '../styles/theme'
import Cart from './Cart'

const mockStore = configureStore([])

const store = mockStore({
  cart: {
    products: [],
    amount: 0
  }
})

describe(Cart.name, () => {
  test('should display cart icon and count products', async () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Cart />
        </ThemeProvider>
      </Provider>
    )

    expect(screen.getByTestId('cart-icon')).toBeInTheDocument()
    expect(screen.getByTestId('count-products').innerHTML).toBe(String(0))
  })

  test('should display summary when toggle is true', async () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Cart />
        </ThemeProvider>
      </Provider>
    )

    expect(screen.queryByText('<span>Total</span>')).not.toBeInTheDocument()

    userEvent.click(screen.getByTestId('cart-icon'))
    expect(screen.getByTestId('cart-summary')).toBeInTheDocument()
  })
})
