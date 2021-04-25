import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import userEvent from '@testing-library/user-event'

import theme from '../styles/theme'
import SizeSelector from './SizeSelector'

describe(SizeSelector.name, () => {
  test('should display component but without size options (buttons)', () => {
    const add = jest.fn()

    const { container } = render(
      <ThemeProvider theme={theme}>
        <SizeSelector
          sizes={[]}
          onAdd={add}
        />
      </ThemeProvider>
    )

    expect(screen.queryByText('Size')).toBeInTheDocument()

    const buttons = container.querySelectorAll('button')
    expect(buttons.length).toBe(0)
  })

  test('should display component with 3 size options (buttons)', () => {
    const add = jest.fn()

    const { container } = render(
      <ThemeProvider theme={theme}>
        <SizeSelector
          sizes={['one', 'two', 'three']}
          onAdd={add}
        />
      </ThemeProvider>
    )

    const buttons = container.querySelectorAll('button')
    expect(buttons.length).toBe(3)

    expect(screen.queryByText('one')).toBeInTheDocument()
    expect(screen.queryByText('two')).toBeInTheDocument()
    expect(screen.queryByText('three')).toBeInTheDocument()

  })

  test('should called add method after clicked', () => {
    const add = jest.fn()

    const { container } = render(
      <ThemeProvider theme={theme}>
        <SizeSelector
          sizes={['one', 'two']}
          onAdd={add}
        />
      </ThemeProvider>
    )

    const buttons = container.querySelectorAll('button')
    expect(buttons.length).toBe(2)

    expect(screen.queryByText('one')).toBeInTheDocument()
    expect(screen.queryByText('two')).toBeInTheDocument()
    
    userEvent.click(buttons[0])
    expect(add).toBeCalledTimes(1)
  })
})
