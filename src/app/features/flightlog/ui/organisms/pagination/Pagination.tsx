import { HStack, Button, IconButton } from "@chakra-ui/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useState } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }:any) => {
  const [current, setCurrent] = useState(currentPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrent(page);
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= current - 1 && i <= current + 1)) {
        pageNumbers.push(
          <Button
            key={i}
            variant={current === i ? "solid" : "outline"}
            colorScheme={current === i ? "blue" : "gray"}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </Button>
        );
      } else if (i === 2 || i === totalPages - 1) {
        pageNumbers.push(
          <Button key={i} variant="outline" isDisabled>
            ...
          </Button>
        );
      }
    }
    return pageNumbers;
  };

  return (
    <HStack>
      <IconButton
        aria-label="前へ"
        icon={<MdChevronLeft />}
        variant="outline"
        onClick={() => handlePageChange(current - 1)}
        isDisabled={current === 1}
      />
      {renderPageNumbers()}
      <IconButton
        aria-label="次へ"
        icon={<MdChevronRight />}
        variant="outline"
        onClick={() => handlePageChange(current + 1)}
        isDisabled={current === totalPages}
      />
    </HStack>
  );
};

export default Pagination;