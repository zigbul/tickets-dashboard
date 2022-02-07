import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button, PageContainer, PageContent, PageContentHeader, PageContentTitle, PageHeader, PageTitle } from '../styles';
import ThemeButtons from '../components/ThemeButtons';
import UserBlock from '../components/UserBlock';
import TicketsTable from '../components/TicketsTable';
import ViewButtons from '../components/ViewButtons';
import TicketCards from '../components/TicketCards';
import Notifications from '../components/Notifications';

const TicketsPage = () => {
    const { currentUser: {displayName, photoURL} } = useSelector(state => state.user);
    const [view, setView] = useState('table');
    
    return (
        <PageContainer>
            <Notifications />
            <PageHeader>
                <PageTitle>Tickets</PageTitle>
                <ThemeButtons margin="0 0 0 auto"/>
                <UserBlock 
                    margin="0 0 0 33px" 
                    name={displayName} 
                    avatarUrl={photoURL}
                />
            </PageHeader>
            <PageContent>
                <PageContentHeader>
                    <PageContentTitle>All Tickets</PageContentTitle>
                    <Link to="/tickets/new" style={{ textDecoration: "none"}}>
                        <Button margin="0 0 0 25px">New Ticket</Button>
                    </Link>
                    <ViewButtons viewHandler={(view) => setView(view)} />
                </PageContentHeader>
                {view === "table" && <TicketsTable />}
                {view === "cards" && <TicketCards />}
            </PageContent>
        </PageContainer>
    );
};

export default TicketsPage;