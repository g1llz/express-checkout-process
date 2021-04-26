import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { resetCart } from '../store/actions/cart'
import { useCart } from '../hooks/use-cart'
import useOnClickOutside from '../hooks/use-on-click-outside'

import { CircleButton } from '../styles/elements/Button'
import { Badget } from '../styles/elements/Badget'

import CartSummary from './CartSummary'

export default function Cart() {
  const [toggle, setToggle] = useState(false)
  const { products, amount } = useCart()
  const ref = useRef(null)
  const dispatch = useDispatch()
  const router = useRouter()

  const handleClickOutside = () => setToggle(false)
  const handleResetCart = () => {
    dispatch(resetCart())
    setToggle(false)
  }

  useOnClickOutside(ref, handleClickOutside)

  return (
    <div ref={ref} style={{ zIndex: 10 }}>
      <CircleButton
        bgColor="rgba(109, 109, 109, 0.2)"
        textColor="#4E4E4E"
        onClick={() => setToggle(!toggle)}
        disabled={!products.length}
      >
        <Badget data-testid="count-products">{products.length}</Badget>
        <FontAwesomeIcon
          icon={faShoppingCart}
          data-testid="cart-icon"
          size="lg"
        />
      </CircleButton>

      {toggle && (
        <CartSummary
          products={products}
          amount={amount}
          onResetCart={handleResetCart}
          onCheckout={() => router.push('/checkout')}
        />
      )}
    </div>
  )
}
