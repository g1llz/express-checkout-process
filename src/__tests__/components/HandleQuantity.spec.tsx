import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import userEvent from '@testing-library/user-event'

import theme from '../../styles/theme'
import HandleQuantity from '../../components/HandleQuantity'

describe(HandleQuantity.name, () => {
  test('should display plus and minus icons and quantity value inside tag h2', () => {
    const increment = jest.fn()
    const decrement = jest.fn()

    const { container } = render(
      <ThemeProvider theme={theme}>
        <HandleQuantity
          onIncrement={increment}
          onDecrement={decrement}
          quantity={1}
        />
      </ThemeProvider>
    )

    expect(screen.getByTestId('plus-icon')).toBeInTheDocument()
    expect(screen.getByTestId('minus-icon')).toBeInTheDocument()

    const h2 = container.querySelector('h2')
    expect(h2.innerHTML).toBe(String(1))
  })

  test('should be call increment after clicked', () => {
    const increment = jest.fn()
    const decrement = jest.fn()

    render(
      <ThemeProvider theme={theme}>
        <HandleQuantity
          onIncrement={increment}
          onDecrement={decrement}
          quantity={1}
        />
      </ThemeProvider>
    )

    userEvent.click(screen.getByTestId('plus-icon'))
    expect(increment).toBeCalledTimes(1)
  })

  test('should be call decrement after clicked', () => {
    const increment = jest.fn()
    const decrement = jest.fn()

    render(
      <ThemeProvider theme={theme}>
        <HandleQuantity
          onIncrement={increment}
          onDecrement={decrement}
          quantity={2}
        />
      </ThemeProvider>
    )

    userEvent.click(screen.getByTestId('minus-icon'))
    expect(decrement).toBeCalledTimes(1)
  })

  test('should display the minus button disabled if qty is 1', () => {
    const increment = jest.fn()
    const decrement = jest.fn()

    render(
      <ThemeProvider theme={theme}>
        <HandleQuantity
          onIncrement={increment}
          onDecrement={decrement}
          quantity={1}
        />
      </ThemeProvider>
    )
    
    const button = screen.getByTestId('minus-icon').closest('button');
    userEvent.click(screen.getByTestId('minus-icon'))

    expect(decrement).toBeCalledTimes(0)
    expect(button).toHaveAttribute('disabled')
  })
})
