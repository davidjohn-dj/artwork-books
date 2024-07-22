import React from "react";
import {
  Pagination as PaginationUI,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "./ui/pagination";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPaginationItems = () => {
    const items = [];

    if (currentPage > 1) {
      items.push(
        <PaginationItem key="previous">
          <PaginationPrevious
            href="#"
            onClick={() => onPageChange(currentPage - 1)}
          />
        </PaginationItem>
      );
    }

    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, currentPage + 1);

    if (startPage > 1) {
      items.push(
        <PaginationItem key={1}>
          <PaginationLink href="#" onClick={() => onPageChange(1)}>
            1
          </PaginationLink>
        </PaginationItem>
      );
      if (startPage > 2) {
        items.push(
          <PaginationItem key="start-ellipsis">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink href="#" onClick={() => onPageChange(i)}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        items.push(
          <PaginationItem key="end-ellipsis">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink href="#" onClick={() => onPageChange(totalPages)}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (currentPage < totalPages) {
      items.push(
        <PaginationItem key="next">
          <PaginationNext
            href="#"
            onClick={() => onPageChange(currentPage + 1)}
          />
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <PaginationUI>
      <PaginationContent>{renderPaginationItems()}</PaginationContent>
    </PaginationUI>
  );
};

export default Pagination;
