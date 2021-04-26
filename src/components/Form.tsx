import { useForm } from 'react-hook-form'

import { Button } from '../styles/elements/Button'
import { Flex } from '../styles/elements/Flex'
import { HSpacer } from '../styles/elements/HSpacer'
import { WrapperForm } from '../styles/elements/Wrapper'
import { Input } from '../styles/elements/Input'

import { IFormInput } from '../interfaces/form'

interface FormProps {
  onCancel: () => void
  onSubmit: (data: IFormInput) => void
}

export default function Form({ onCancel, onSubmit }: FormProps) {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<IFormInput>()

  const prepareSubmit = (data: IFormInput) => onSubmit(data)

  return (
    <WrapperForm>
      <form>
        <Flex direction="column" className="grid-a">
          <label htmlFor="fullName">Full Name</label>
          <Input {...register('fullName', { required: true })} role="textbox" />
          <span role="alert">{errors.fullName && 'Name is required'}</span>
        </Flex>

        <Flex direction="column" className="grid-b">
          <label htmlFor="email">E-mail</label>
          <Input {...register('email', { required: true })} />
          <span role="alert">{errors.email && 'E-mail is required'}</span>
        </Flex>

        <Flex direction="column" className="grid-c">
          <label htmlFor="address">Address</label>
          <Input {...register('address', { required: true, minLength: 10 })} />
          <span role="alert">{errors.address && 'Address is required'}</span>
        </Flex>

        <Flex direction="column" className="grid-d">
          <label htmlFor="country">Country</label>
          <Input {...register('country', { required: true })} />
          <span role="alert">{errors.country && 'Country is required'}</span>
        </Flex>

        <Flex direction="column" className="grid-e">
          <label htmlFor="zipcode">Postal code</label>
          <Input {...register('zipCode', { required: true })} />
          <span role="alert">{errors.zipCode && 'Postal code is required'}</span>
        </Flex>

        <Flex direction="column" className="grid-f">
          <label htmlFor="phone">Phone number</label>
          <Input {...register('phone', { required: true })} />
          <span role="alert">{errors.phone && 'Phone number is required'}</span>
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
    </WrapperForm>
  )
}
