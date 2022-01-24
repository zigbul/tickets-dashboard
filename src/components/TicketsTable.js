import * as React from 'react';
import styled from 'styled-components';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from './Pagination';

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

const TicketsTable = ({ context }) => {
  const { firestore } = context;
  const [tickets, loading] = useCollectionData(
    firestore.collection('tickets').orderBy('created')
  )

  if (loading) return (
    <div style={{ display: "flex", height: "60vh", justifyContent: "center", alignItems: "center"}}>
      <h1>Loading...</h1>
    </div>
  )

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ticket details</TableCell>
            <TableCell>Owner name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map((ticket) => {
            console.log(ticket);
            return (
              <TableRow
                key={ticket.uid}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <CellContainer>
                    <TableAvatar src={ticket.avatar} />
                    <div>
                      <TableText>{ticket.title}</TableText>
                      <TableSubText>{ticket.updated.seconds}</TableSubText>
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
                  <TableText>{ticket.updated.seconds}</TableText>
                  <TableSubText>{ticket.updated.seconds}</TableSubText>
                  </div>
                </TableCell>
                <TableCell>{ticket.carbs}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            )})}
        </TableBody>
      </Table>
      <Pagination />
    </TableContainer>
  );
}

export default TicketsTable;