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
      <span>Qty</span>
      <Flex content="flex-start">
        <CircleButton mini="true" onClick={onIncrement}>
          <FontAwesomeIcon icon={faPlus} data-testid="plus-icon" />
        </CircleButton>
        <h2 style={{ margin: 5 }}>{quantity}</h2>
        <CircleButton mini="true" onClick={onDecrement}>
          <FontAwesomeIcon icon={faMinus} data-testid="minus-icon" />
        </CircleButton>
      </Flex>
    </Fragment>
  )
}
