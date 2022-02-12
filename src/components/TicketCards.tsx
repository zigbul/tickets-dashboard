import { useSelector, useDispatch } from 'react-redux';
import { setCurrentTicket } from '../store/slices/ticketSlice';
import { formatDistanceToNow, format }from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

import DeleteButton from './DeleteButton';
import { Link } from 'react-router-dom';

const TicketCardList = styled.ul`
display: flex;
gap: 10px;
padding: 0 33px 33px;
flex-wrap: wrap;
font-weight: 600;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.2px;
color: #252733;
`

const TicketCard = styled.li<{completed: boolean}>`
display: flex;
flex-direction: column;
padding: 16px 22px;
flex: 1;
min-width: 30%;
background: ${({ completed }) => completed ? "#CCFFCC" : "#FFFFFF"};
box-shadow: 0px 0px 10px rgba(192, 197, 233, 0.6);
border-radius: 4px;
transition: all .1s linear;
cursor: pointer;

&> * + * {
    margin-top: 16px;
};
`

const CardRow = styled.div`
display: flex;
align-items: center;
`

const TicketDate = styled.p`
`

const TicketTime = styled.span`
font-weight: normal;
font-size: 12px;
line-height: 16px;
letter-spacing: 0.1px;
color: #C5C7CD;
`

const TicketPriority = styled.span<{priority: string}>`
padding: 2px 10px;
margin: 0 10px 0 auto;
border-radius: 100px;
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
color: white;
text-transform: uppercase;
font-size: 10px;
`

const CardTitle = styled.p`
`

const TicketUpdated = styled.p`
font-weight: normal;
font-size: 12px;
line-height: 16px;
letter-spacing: 0.1px;
color: #C5C7CD;
`

const Avatar = styled.img`
width: 44px;
height: 44px;
`

const Name = styled.span`
margin-left: 10px;
`

type TicketState = {
    ticket: {
        tickets: {
            title: string,
            completed: boolean,
            updated: {
                seconds: number
            },
            priority: string,
            uid: string,
            photoURL: string,
            displayName: string,
            id: string,
        }[]
    }
}

type UserState = {
    user: {
        currentUser: {
            uid: string,
        }
    }
}

const TicketCards = ({ search = "" }) => {
    const dispatch = useDispatch();
    const { tickets } = useSelector((state: TicketState) => state.ticket);
    const { currentUser } = useSelector((state: UserState) => state.user);

    return (
        <TicketCardList>
            {tickets.filter(tic => tic.title.toLowerCase().includes(search.toLowerCase())).map( ticket => {
                return (
                    <TicketCard key={uuidv4()} completed={ticket.completed}>
                        <CardRow>
                            <div>
                                <TicketDate>
                                    {format(new Date(ticket.updated.seconds * 1000), 'PP')}
                                </TicketDate>
                                <TicketTime>
                                    {format(new Date(ticket.updated.seconds * 1000), 'p')}
                                </TicketTime>
                            </div>
                            <TicketPriority priority={ticket.priority}>
                                {ticket.priority}
                            </TicketPriority>
                            {(currentUser.uid === ticket.uid && !ticket.completed) && <DeleteButton id={ticket.id} />}
                        </CardRow>
                        <CardTitle onClick={() => dispatch(setCurrentTicket(ticket))}>
                            <Link to={`/tickets/${ticket.title}`}>{ticket.title}</Link>
                        </CardTitle>
                        <TicketUpdated>{formatDistanceToNow(new Date(ticket.updated.seconds  * 1000))}</TicketUpdated>
                        <CardRow>
                            <Avatar src={ticket.photoURL} />
                            <Name>{ticket.displayName}</Name>
                        </CardRow>
                    </TicketCard>
                )
            })}
            
        </TicketCardList>
    );
};

export default TicketCards;