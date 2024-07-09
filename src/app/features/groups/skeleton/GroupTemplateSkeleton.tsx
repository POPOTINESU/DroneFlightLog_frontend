import { Skeleton, Td, Tr } from '@chakra-ui/react'
import React from 'react'

export const GroupTemplateSkeleton = () => {
  return (
    Array.from({ length: 15 }).map((_, index) => (
      <Tr key={index}>
        <Td>
          <Skeleton height="20px" />
        </Td>
        <Td>
          <Skeleton height="20px" />
        </Td>
        <Td>
          <Skeleton height="20px" />
        </Td>
        <Td>
          <Skeleton height="20px" />
        </Td>
      </Tr>
    ))
  )
}
