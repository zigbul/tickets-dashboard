import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import useTickets from '../hooks/useTickets';

const Pagination = ({ page, handleChangePage, rowsPerPage, handleChangeRowsPerPage }) => {
  const [tickets] = useTickets();

  return (
    <TablePagination
      component="div"
      count={tickets.length}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[1, 2, 3]}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}

export default Pagination;