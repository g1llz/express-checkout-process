import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../store/actions/cart'

import { Box } from '../styles/elements/Box'
import { CircleButton } from '../styles/elements/Button'
import { Card } from '../styles/elements/Card'
import { Flex } from '../styles/elements/Flex'
import { HSpacer } from '../styles/elements/HSpacer'

import HandleQuantity from './HandleQuantity'
import SizeSelector from './SizeSelector'

export interface IProduct {
  id: number
  image: string
  title: string
  description: string
  sizes: string[]
  price: number,
  backgroundColor: string
}

interface ProductProps {
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  const [item] = useState(product)
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState(null)
  const dispatch = useDispatch()

  const reset = () => {
    setQuantity(1)
    setSize(null)
  }

  const handleAddItem = () => {
    const { id, title, price } = item
    const amount = Number((price * quantity).toFixed(2))

    dispatch(
      addItem({
        id,
        title,
        price,
        size,
        quantity,
        amount
      })
    )

    reset()
  }

  return (
    <Card bgColor={item.backgroundColor}>
      <Flex>
        <Box>
          <h1>{item.title}</h1>
          <HSpacer space="1rem" />

          <span>From</span>
          <h2>${item.price}</h2>
          <HSpacer space="1rem" />

          <SizeSelector sizes={item.sizes} onAdd={value => setSize(value)} />
          <HSpacer space="1rem" />

          <HandleQuantity
            quantity={quantity}
            onIncrement={() => setQuantity(quantity + 1)}
            onDecrement={() => setQuantity(quantity - 1)}
          />
          <HSpacer space="1rem" />

          <CircleButton onClick={() => handleAddItem()}>
            Add
          </CircleButton>
        </Box>

        {/* <img src={item.image} /> */}
      </Flex>
    </Card>
  )
}
