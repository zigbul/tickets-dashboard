import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';

const Pagination = ({ page, handleChangePage, rowsPerPage, handleChangeRowsPerPage }) => {

  return (
    <TablePagination
      component="div"
      count={4}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[1, 2, 3]}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}

export default Pagination;