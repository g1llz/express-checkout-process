import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import userEvent from '@testing-library/user-event'

import theme from '../../styles/theme'
import Cart from '../../components/Cart'

const mockStore = configureStore([])

let state = {
  cart: {
    products: [],
    amount: 0
  }
}
const store = mockStore(() => state)

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

  test('should mantain the button disabled when products is empty', async () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Cart />
        </ThemeProvider>
      </Provider>
    )

    const button = screen.getByTestId('cart-icon').closest('button')
    userEvent.click(button)

    expect(button).toHaveAttribute('disabled')
  })

  test('should display summary when toggle is true', async () => {
    state = {
      cart: {
        products: [
          {
            amount: 19.93,
            id: 4,
            price: 19.93,
            quantity: 1,
            size: 'small',
            title: 'Test product'
          }
        ],
        amount: 19.93
      }
    }

    store.dispatch({
      type: 'ADD_ITEM_CART',
      payload: ''
    })

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Cart />
        </ThemeProvider>
      </Provider>
    )

    expect(screen.queryByText('Total')).not.toBeInTheDocument()

    const button = screen.getByTestId('cart-icon').closest('button')
    userEvent.click(button)

    expect(screen.getByTestId('cart-summary')).toBeInTheDocument()
    expect(screen.queryByText('Total')).toBeInTheDocument()
  })
})
