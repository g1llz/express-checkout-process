import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Flex } from '../styles/elements/Flex'
import { Header } from '../styles/elements/Header'

import Cart from './Cart'

export default function HeaderBar() {
  return (
    <Header>
      <Flex>
        <FontAwesomeIcon icon={faSeedling} size="2x" color="#1c923a" />
        <Cart />
      </Flex>
    </Header>
  )
}
