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
import { TextField } from '@mui/material';

const TicketsPage = () => {
    const { currentUser: {displayName, photoURL} } = useSelector(state => state.user);
    const [view, setView] = useState('table');
    const [search, setSearch] = useState('');

    const handleChange = e => setSearch(e.target.value);
    
    return (
        <PageContainer>
            <Notifications />
            <PageHeader>
                <PageTitle>Tickets</PageTitle>
                <TextField
                    id="outlined-name"
                    label="Search"
                    value={search}
                    onChange={handleChange}
                    sx={{ 
                        marginLeft: "20px", 
                        borderColor: "white !important",
                        "& fieldset": {
                            borderColor: "var(--colors-text)"
                        },
                        "& *, & input, & label": {
                            color: "var(--colors-text)"
                        },
                    }}
                />
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
                {view === "table" && <TicketsTable search={search} />}
                {view === "cards" && <TicketCards search={search} />}
            </PageContent>
        </PageContainer>
    );
};

export default TicketsPage;