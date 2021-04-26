import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import theme from '../../styles/theme'
import Home from '../../pages'

const mockStore = configureStore([])

const store = mockStore({
  cart: {
    products: [],
    amount: 0
  }
})

const mockedProducts = [
  {
    id: 4,
    image: '/plant_xx.png',
    title: 'Test product 1',
    description: 'Something else',
    size: 'small',
    price: 19.93,
    backgroundColor: null
  },
  {
    id: 5,
    image: '/plant_xx.png',
    title: 'Test product 2',
    description: 'Something else',
    size: 'small',
    price: 9.9,
    backgroundColor: null
  }
]

describe(Home.name, () => {
  test('should display name "Plants" in document but not render Product component', async () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Home products={[]} />
        </ThemeProvider>
      </Provider>
    )

    expect(screen.queryByText('Plants')).toBeInTheDocument()
  })

  test('should render Product component correctly', async () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Home products={mockedProducts} />
        </ThemeProvider>
      </Provider>
    )
    
    expect(screen.getAllByTestId('product-component').length).toBe(2)
    expect(screen.queryByText('Test product 1')).toBeInTheDocument()
    expect(screen.queryByText('Test product 2')).toBeInTheDocument()
  })
})
