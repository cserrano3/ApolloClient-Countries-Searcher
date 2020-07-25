import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

interface PaginationViewProps {
  numberOfItems: number;
  itemsPerPage: number;
  onSetPage: (page: number) => void;
}

export default React.memo(function PaginationView({
  numberOfItems,
  itemsPerPage,
  onSetPage
}: PaginationViewProps) {

  const totalPages = Math.ceil(numberOfItems / itemsPerPage);

  const setPage = (page: number) => onSetPage(page);

  return (
    <Pagination
      count={totalPages}
      onChange={(_event, page) => setPage(page)}
    />
  );
});
