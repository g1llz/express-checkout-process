import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import {
  faArrowLeft,
  faExpand,
  faCartPlus
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { addItem } from '../store/actions/cart'
import { IProduct } from '../interfaces/product'

import { Box } from '../styles/elements/Box'
import { Button, CircleButton } from '../styles/elements/Button'
import { Card } from '../styles/elements/Card'
import { CardDescription } from '../styles/elements/CardDescription'
import { HSpacer } from '../styles/elements/HSpacer'

import HandleQuantity from './HandleQuantity'

interface ProductProps {
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  const [expand, setExpand] = useState(false)
  const [item] = useState(product)
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  const reset = () => {
    setQuantity(1)
    setExpand(false)
  }

  const handleAddItem = () => {
    const { id, title, price, size } = item
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
    <Card data-expand={expand} data-testid="product-component">
      {expand && (
        <Button
          className="close"
          bgColor="transparent"
          onClick={() => setExpand(false)}
        >
          <FontAwesomeIcon icon={faArrowLeft} size="2x" />
        </Button>
      )}
      <Box data-expand={expand}>
        <div className="grid-a">
          <span>From</span>
          <h2>${product.price.toFixed(2)}</h2>
        </div>

        <div className="grid-b">
          <div data-wrapper={expand}>
            <Image
              src={product.image}
              alt={product.title}
              width={128}
              height={128}
            />
          </div>
        </div>

        <div className="grid-c">
          <h1>{product.title}</h1>
        </div>

        <div className="grid-d">
          <span>Size</span>
          <h2>{product.size}</h2>
        </div>

        {expand && (
          <div className="grid-e">
            <HandleQuantity
              quantity={quantity}
              onIncrement={() => setQuantity(quantity + 1)}
              onDecrement={() => setQuantity(quantity - 1)}
            />
          </div>
        )}

        {!expand && (
          <Button
            bgColor="transparent"
            className="grid-f"
            onClick={() => setExpand(true)}
          >
            <HSpacer space="15px" />
            <FontAwesomeIcon
              icon={faExpand}
              size="2x"
              data-testid="expand-icon"
            />
          </Button>
        )}

        {expand && (
          <CircleButton
            className="grid-g"
            onClick={() => handleAddItem()}
            data-addbutton="true"
          >
            <FontAwesomeIcon
              icon={faCartPlus}
              size="2x"
              data-testid="plus-cart-icon"
            />
          </CircleButton>
        )}
      </Box>

      {expand && (
        <CardDescription>
          <h2>Description</h2>
          <HSpacer />
          <p>{item.description}</p>
        </CardDescription>
      )}
    </Card>
  )
}
