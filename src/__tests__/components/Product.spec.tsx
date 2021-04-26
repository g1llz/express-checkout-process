import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import userEvent from '@testing-library/user-event'

import theme from '../../styles/theme'
import Product from '../../components/Product'

const mockStore = configureStore([])

const store = mockStore({
  cart: {
    products: [],
    amount: 0
  }
})

const mockedProduct = {
  id: 4,
  image: 'https://image.test.io',
  title: 'Test product',
  description: 'Something else',
  size: 'small',
  price: 19.93,
  backgroundColor: null
}

describe(Product.name, () => {
  test('should display product correctly', async () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Product product={mockedProduct} />
        </ThemeProvider>
      </Provider>
    )

    expect(screen.getByText('Test product')).toBeInTheDocument()
    expect(screen.getByText('$19.93')).toBeInTheDocument()
    expect(screen.getByTestId('expand-icon')).toBeInTheDocument()

    const button = screen.getByTestId('expand-icon').closest('button')
    userEvent.click(button)

    expect(screen.getByText('Something else')).toBeInTheDocument()
    expect(screen.getByTestId('plus-cart-icon')).toBeInTheDocument()
  })

  test('should called the dispatch method', async () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Product product={mockedProduct} />
        </ThemeProvider>
      </Provider>
    )

    const expandButton = screen.getByTestId('expand-icon').closest('button')
    userEvent.click(expandButton)

    const addItemButton = screen.getByTestId('plus-cart-icon').closest('button')
    userEvent.click(addItemButton)

    const actions = store.getActions()
    const expectedPayload = {
      type: 'ADD_ITEM_CART',
      payload: {
        amount: 19.93,
        id: 4,
        price: 19.93,
        quantity: 1,
        size: 'small',
        title: 'Test product'
      }
    }
    expect(actions).toEqual([expectedPayload])
  })
})
