import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Flex } from '../styles/elements/Flex'
import { Header } from '../styles/elements/Header'

import Cart from './Cart'

export default function HeaderBar() {
  return (
    <Header>
      <Flex>
        {/* <h1>CoolBrand</h1> */}
        <FontAwesomeIcon icon={faBars} size="2x" />
        <Cart />
      </Flex>
    </Header>
  )
}
