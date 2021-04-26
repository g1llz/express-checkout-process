import { useForm } from 'react-hook-form'

import { Button } from '../styles/elements/Button'
import { Flex } from '../styles/elements/Flex'
import { FormWrapper } from '../styles/elements/Form'
import { HSpacer } from '../styles/elements/HSpacer'

import { Input } from '../styles/elements/Input'

interface IFormInput {
  fullName: string
  email: string
  address: string
  country: string
  zipCode: string
  phone: string
}

interface FormProps {
  onCancel: () => void
  onSubmit: () => void
}

export default function Form({ onCancel, onSubmit }) {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<IFormInput>()

  const prepareSubmit = (data: IFormInput) => {  
    console.log(data)
    onSubmit()
  }

  return (
    <FormWrapper>
      <form>
        <Flex direction="column">
          <label htmlFor="fullName">Full Name</label>
          <Input {...register('fullName', { required: true })} />
          <span>{errors.fullName && 'Name is required'}</span>
        </Flex>

        <Flex direction="column">
          <label htmlFor="email">E-mail</label>
          <Input {...register('email', { required: true })} />
          <span>{errors.email && 'Email is required'}</span>
        </Flex>

        <Flex direction="column">
          <label htmlFor="address">Address</label>
          <Input {...register('address', { required: true, minLength: 10 })} />
          <span>{errors.address && 'Address is required'}</span>
        </Flex>

        <Flex direction="column">
          <label htmlFor="country">Country</label>
          <Input {...register('country', { required: true })} />
          <span>{errors.country && 'Country is required'}</span>
        </Flex>

        <Flex direction="column">
          <label htmlFor="zipcode">Postal code</label>
          <Input {...register('zipCode', { required: true })} />
          <span>{errors.zipCode && 'Postal code is required'}</span>
        </Flex>

        <Flex direction="column">
          <label htmlFor="phone">Phone number</label>
          <Input {...register('phone', { required: true })} />
          <span>{errors.phone && 'Phone number is required'}</span>
        </Flex>

        <HSpacer />

        <Flex>
          <Button
            bgColor="transparent"
            textColor="#4E4E4E"
            maxWidth="150px"
            onClick={onCancel}
            type="button"
          >
            Back to shop
          </Button>
          <Button
            maxWidth="150px"
            onClick={handleSubmit(prepareSubmit)}
            data-testid="finish-button"
            type="button"
          >
            Finish order!
          </Button>
        </Flex>
      </form>
    </FormWrapper>
  )
}
