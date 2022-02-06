import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { formatDistanceToNow, format }from 'date-fns';

import DeleteButton from './DeleteButton';

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

const TicketCard = styled.li`
display: flex;
flex-direction: column;
padding: 16px 22px;
flex: 1;
min-width: 30%;
background: #FFFFFF;
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

const TicketPriority = styled.span`
padding: 2px 10px;
margin: 0 10px 0 auto;
border-radius: 100px;
background: #F12B2C;
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

const TicketCards = () => {
    const { tickets } = useSelector(state => state.ticket);

    return (
        <TicketCardList>
            {tickets.map( ticket => {
                return (
                    <TicketCard>
                        <CardRow>
                            <div>
                                <TicketDate>
                                    {format(new Date(ticket.updated.seconds * 1000), 'PP')}
                                </TicketDate>
                                <TicketTime>
                                    {format(new Date(ticket.updated.seconds * 1000), 'p')}
                                </TicketTime>
                            </div>
                            <TicketPriority>{ticket.priority}</TicketPriority>
                            <DeleteButton />
                        </CardRow>
                        <CardTitle>{ticket.title}</CardTitle>
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