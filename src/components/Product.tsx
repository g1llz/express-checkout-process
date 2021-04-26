import { Fragment, useState } from 'react'
import Image from 'next/image'

import { IProduct } from '../interfaces/product'

import { Box } from '../styles/elements/Box'
import { Card } from '../styles/elements/Card'
import ProductDetail from './ProductDetail'

interface ProductProps {
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  const [expand, setExpand] = useState(false)
  const [item] = useState(product)

  return (
    <Fragment>
      <Card data-testid="product-component" onClick={() => setExpand(true)}>
        <Box>
          <div className="grid-a">
            <span>From</span>
            <h2>${product.price.toFixed(2)}</h2>
          </div>

          <div className="grid-b">
            <div data-wrapper="product">
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
        </Box>
      </Card>

      <ProductDetail
        product={item}
        expand={expand}
        onClose={() => setExpand(false)}
      />
    </Fragment>
  )
}
