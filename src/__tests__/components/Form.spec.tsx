import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import userEvent from '@testing-library/user-event'

import theme from '../../styles/theme'
import Form from '../../components/Form'

describe(Form.name, () => {
  test('should render fields and buttons correctly', async () => {
    const cancel = jest.fn()
    const submit = jest.fn()

    const { container } = render(
      <ThemeProvider theme={theme}>
        <Form onCancel={cancel} onSubmit={submit} />
      </ThemeProvider>
    )

    expect(container.querySelectorAll('input').length).toBe(6)

    expect(screen.getByText('Full Name')).toBeInTheDocument()
    expect(screen.getByText('E-mail')).toBeInTheDocument()
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('Country')).toBeInTheDocument()
    expect(screen.getByText('Postal code')).toBeInTheDocument()
    expect(screen.getByText('Phone number')).toBeInTheDocument()

    expect(container.querySelectorAll('button').length).toBe(2)
  })

  test('should display required fields error', async () => {
    const cancel = jest.fn()
    const submit = jest.fn()

    render(
      <ThemeProvider theme={theme}>
        <Form onCancel={cancel} onSubmit={submit} />
      </ThemeProvider>
    )

    userEvent.click(screen.getByTestId('finish-button'))
    expect(submit).toBeCalledTimes(0)

    await waitFor(() => {
      expect(screen.getAllByRole('alert')).toHaveLength(6)
    })
  })

  test('should be call submit method when fields are filled', async () => {
    const cancel = jest.fn()
    const submit = jest.fn()

    const mockedData = [
      'Test',
      'test@test.io',
      'Av Paulist, 1234 - São Paulo',
      'Brasil',
      '12345-001',
      '55 11 91234567'
    ]

    const { container } = render(
      <ThemeProvider theme={theme}>
        <Form onCancel={cancel} onSubmit={submit} />
      </ThemeProvider>
    )

    const inputs = container.querySelectorAll('input')

    fireEvent.input(inputs[0], { target: { value: mockedData[0] } })
    fireEvent.input(inputs[1], { target: { value: mockedData[1] } })
    fireEvent.input(inputs[2], { target: { value: mockedData[2] } })
    fireEvent.input(inputs[3], { target: { value: mockedData[3] } })
    fireEvent.input(inputs[4], { target: { value: mockedData[4] } })
    fireEvent.input(inputs[5], { target: { value: mockedData[5] } })

    expect(inputs[0]).toHaveValue(mockedData[0])
    expect(inputs[1]).toHaveValue(mockedData[1])
    expect(inputs[2]).toHaveValue(mockedData[2])
    expect(inputs[3]).toHaveValue(mockedData[3])
    expect(inputs[4]).toHaveValue(mockedData[4])
    expect(inputs[5]).toHaveValue(mockedData[5])

    await waitFor(() => {
      userEvent.click(screen.getByTestId('finish-button'))
      expect(submit).toBeCalledTimes(1)
    })
  })
})
