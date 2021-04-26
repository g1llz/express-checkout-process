import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import theme from '../../styles/theme'
import Checkout from '../../pages/checkout'

const mockStore = configureStore([])

let state = {
  cart: {
    products: [],
    amount: 0
  }
}
const store = mockStore(() => state)

describe(Checkout.name, () => {
  test('should display name "Checkout" and a text about empty cart', async () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Checkout />
        </ThemeProvider>
      </Provider>
    )

    expect(screen.queryByText('Checkout')).toBeInTheDocument()
    expect(screen.queryByText('Your cart is empty!')).toBeInTheDocument()
  })

  test('should render cart resume correctly when have product on redux', async () => {
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
          <Checkout />
        </ThemeProvider>
      </Provider>
    )

    expect(screen.getByTestId('product-list-component')).toBeInTheDocument()
    expect(screen.queryByText('Test product')).toBeInTheDocument()
    expect(screen.queryByText('$19.93')).toBeInTheDocument()
  })
})
