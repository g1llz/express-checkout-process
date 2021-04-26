import { Fragment } from 'react'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { CircleButton } from '../styles/elements/Button'
import { Flex } from '../styles/elements/Flex'

interface QuantityProps {
  quantity: number
  onIncrement: () => void
  onDecrement: () => void
}

export default function HandleQuantity({
  quantity,
  onIncrement,
  onDecrement
}: QuantityProps) {
  return (
    <Fragment>
      <span>Quantity</span>
      <Flex content="flex-start">
        <CircleButton
          bgColor="#1c733a"
          onClick={onIncrement}
          data-minibutton="true"
        >
          <FontAwesomeIcon icon={faPlus} data-testid="plus-icon" />
        </CircleButton>
        <h2 style={{ margin: 5 }}>{quantity}</h2>
        <CircleButton
          bgColor="#1c733a"
          onClick={onDecrement}
          disabled={quantity <= 1}
          data-minibutton="true"
        >
          <FontAwesomeIcon icon={faMinus} data-testid="minus-icon" />
        </CircleButton>
      </Flex>
    </Fragment>
  )
}
