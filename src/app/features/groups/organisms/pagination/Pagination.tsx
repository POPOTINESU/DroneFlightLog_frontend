import { Button, Center, HStack } from '@chakra-ui/react';
import React from 'react'

export const Pagination = ({ pageCount, currentPage, handlePageClick }:any) => {
  const pages = [...Array(pageCount).keys()];

  return (
    <Center mt={4}>
      <HStack spacing={2}>
        {currentPage > 0 && (
          <Button onClick={() => handlePageClick(currentPage - 1)}>前</Button>
        )}
        {pages.map((page) => (
          <Button
            key={page}
            onClick={() => handlePageClick(page)}
            variant={currentPage === page ? "solid" : "outline"}
            colorScheme='white'
            color='black'
          >
            {page + 1}
          </Button>
        ))}
        {currentPage < pageCount - 1 && (
          <Button onClick={() => handlePageClick(currentPage + 1)}>次</Button>
        )}
      </HStack>
    </Center>
  );
};