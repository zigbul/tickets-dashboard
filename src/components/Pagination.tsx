import * as React from 'react';
import TablePagination, { TablePaginationBaseProps, TablePaginationTypeMap } from '@mui/material/TablePagination';
import { useSelector } from 'react-redux';
import { DefaultComponentProps } from '@mui/material/OverridableComponent';

type Ticket = {
  length: number,
}

type Tickets = {
  tickets: Array<Ticket>,
}
type State = {
  ticket: Tickets
};

type Props = DefaultComponentProps<TablePaginationTypeMap<{handleChangePage: React.MouseEvent<HTMLButtonElement>, handleChangeRowsPerPage: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>}, React.JSXElementConstructor<TablePaginationBaseProps>>>

const Pagination = ({ page, handleChangePage, rowsPerPage, handleChangeRowsPerPage }:Props) => {
  const { tickets } = useSelector((state: State) => state.ticket);

  return (
    <TablePagination
      component="div"
      count={tickets.length}
      page={page}
      // @ts-ignore
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[2, 4, 8]}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}

export default Pagination;