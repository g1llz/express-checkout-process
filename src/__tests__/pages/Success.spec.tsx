import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import theme from '../../styles/theme'
import Success from '../../pages/success'

const mockStore = configureStore([])

let state = {
  cart: {
    products: [],
    amount: 0
  },
  purchase: {
    products: [
      {
        id: 3,
        title: 'Test product',
        size: 'large',
        quantity: 2,
        price: 25.25,
        amount: 50.5
      }
    ],
    shipping: {
      name: 'Bono Vox',
      email: 'test@test.io',
      address: '98 5th Avenue, New York',
      country: 'United States',
      zipcode: '1230999',
      phone: '+1 555-1234'
    }
  }
}
const store = mockStore(() => state)

describe(Success.name, () => {
  test('should display "success" in document', async () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Success />
        </ThemeProvider>
      </Provider>
    )

    expect(screen.queryByText('Success!')).toBeInTheDocument()
    expect(screen.queryByText('Order resume')).toBeInTheDocument()
  })
})
