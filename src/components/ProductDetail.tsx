import { Fragment, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import { faArrowLeft, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import HandleQuantity from './HandleQuantity'

import useOnClickOutside from '../hooks/use-on-click-outside'

import { Box } from '../styles/elements/Box'
import { Button, CircleButton } from '../styles/elements/Button'
import { Card } from '../styles/elements/Card'
import { CardDescription } from '../styles/elements/CardDescription'
import { HSpacer } from '../styles/elements/HSpacer'

import { IProduct } from '../interfaces/product'
import { addItem } from '../store/actions/cart'

interface ProductDetailProps {
  product: IProduct
  expand: boolean
  onClose: () => void
}

export default function ProductDetail({
  product,
  expand,
  onClose
}: ProductDetailProps) {
  const [item] = useState(product)
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const ref = useRef(null)

  const handleClickOutside = () => onClose()

  const reset = () => {
    setQuantity(1)
    onClose()
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

  useOnClickOutside(ref, handleClickOutside)

  return (
    <Fragment>
      {expand && (
        <Card
          ref={ref}
          data-detail="card"
          data-testid="product-component-detail"
        >
          <Button
            className="close"
            bgColor="transparent"
            onClick={() => onClose()}
          >
            <FontAwesomeIcon icon={faArrowLeft} size="2x" />
          </Button>

          <Box data-detail="box">
            <div className="grid-a">
              <span>From</span>
              <h2>${product.price.toFixed(2)}</h2>
            </div>

            <div className="grid-b">
              <div data-wrapper="detail">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={512}
                  height={512}
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

            <div className="grid-e">
              <HandleQuantity
                quantity={quantity}
                onIncrement={() => setQuantity(quantity + 1)}
                onDecrement={() => setQuantity(quantity - 1)}
              />
            </div>

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
          </Box>

          <CardDescription data-description="detail">
            <h2>Description</h2>
            <HSpacer />
            <p>{item.description}</p>
          </CardDescription>
        </Card>
      )}
    </Fragment>
  )
}
