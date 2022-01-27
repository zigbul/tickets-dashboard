import * as React from 'react';
import styled from 'styled-components';
import { formatDistanceToNow, format }from 'date-fns';
import { v4 as v4uuid } from 'uuid';
import useTickets from '../hooks/useTickets';
import { Link } from 'react-router-dom';
import { setCurrentTicket } from '../store/ticketSlice';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from './Pagination';
import { useDispatch } from 'react-redux';


const CellContainer = styled.div`
display: flex;
align-items: center;
`

const TableAvatar = styled.img`
width: 44px;
height: 44px;
margin-right: 24px;
`

const TableText = styled.p`
padding: 2px 0;
font-weight: 600;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.2px;
color: #252733;
`

const TableSubText = styled.p`
padding: 2px 0;
font-weight: normal;
font-size: 12px;
line-height: 16px;
letter-spacing: 0.1px;
color: #C5C7CD;
`

const TablePriority = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 5px 12px;
background: ${({ priority }) => {
  switch(priority) {
    case 'Low':
      return "#F2C94C";
    case 'Normal':
      return "#29CC97";
    case 'High':
      return "#F12B2C";
    default:
      return "transparent";
  }
}};
border-radius: 100px;
letter-spacing: 0.5px;
text-transform: uppercase;
font-weight: bold;
font-size: 11px;
line-height: 14px;
color: #FFFFFF;
`

const TicketsTable = () => {
  const dispatch = useDispatch();

  const [sortBy, setSortBy] = React.useState('CREATED_ASC');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  const [tickets, loading] = useTickets(sortBy);

  const sortByCreated = () => {
    if (sortBy === 'CREATED_ASC') {
      setSortBy('CREATED_DESC');
    } else {
      setSortBy('CREATED_ASC');
    }
  }

  const sortByPriority = () => {
    if (sortBy === 'PRIORITY_ASC') {
      setSortBy('PRIORITY_DESC');
    } else {
      setSortBy('PRIORITY_ASC');
    }
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  if (loading) return (
    <div style={{ display: "flex", height: "60vh", justifyContent: "center", alignItems: "center"}}>
      <h1>Loading...</h1>
    </div>
  );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ticket details</TableCell>
            <TableCell>Owner name</TableCell>
            <TableCell>Date <button onClick={sortByCreated}>по дате</button></TableCell>
            <TableCell>Priority <button onClick={sortByPriority}>по приоритету</button></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map((ticket) => {
            // console.log(ticket);

            return (
              <TableRow
                key={v4uuid()}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <CellContainer>
                    <TableAvatar src={ticket.avatar} />
                    <div>
                      <TableText onClick={() => dispatch(setCurrentTicket(ticket))}>
                        <Link to={`/tickets/${ticket.title}`}>{ticket.title}</Link>
                      </TableText>
                      <TableSubText>{formatDistanceToNow(new Date(ticket.updated.seconds * 1000))}</TableSubText>
                    </div>
                  </CellContainer>
                </TableCell>
                <TableCell>
                  <CellContainer>
                    <TableText>{ticket.userName}</TableText>
                  </CellContainer>
                </TableCell>
                <TableCell>
                  <div>
                  <TableText>{format(new Date(ticket.updated.seconds * 1000), 'PP')}</TableText>
                  <TableSubText>{format(new Date(ticket.updated.seconds * 1000), 'p')}</TableSubText>
                  </div>
                </TableCell>
                <TableCell>
                  <TablePriority priority={ticket.priority}>
                    {ticket.priority}
                  </TablePriority>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            )}).splice(1 * page * rowsPerPage, rowsPerPage)}
        </TableBody>
      </Table>
      <Pagination 
        handleChangePage={handleChangePage} 
        page={page} 
        rowsPerPage={rowsPerPage} 
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default TicketsTable;