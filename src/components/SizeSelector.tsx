import { Fragment } from 'react'

import { TagButton } from '../styles/elements/Button'
import { Flex } from '../styles/elements/Flex'

interface SizeProps {
  sizes: string[]
  onAdd: (size: string) => void
}

export default function SizeSelector({ sizes, onAdd }: SizeProps) {
  return (
    <Fragment>
      <span>Size</span>
      <Flex content="flex-start">
        {sizes.map((size, index) => (
          <TagButton key={index} onClick={() => onAdd(size)} bgColor="#0F2311">
            {size}
          </TagButton>
        ))}
      </Flex>
    </Fragment>
  )
}
