import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import theme from '../../styles/theme'
import Success from '../../pages/success'

describe(Success.name, () => {
  test('should display "success!" in document', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Success />
      </ThemeProvider>
    )

    expect(screen.queryByText('Success!')).toBeInTheDocument()
    expect(screen.queryByText('Order resume')).toBeInTheDocument()
  })
})
