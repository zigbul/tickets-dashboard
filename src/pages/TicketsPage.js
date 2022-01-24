import { Button, PageContainer, PageContent, PageContentHeader, PageContentTitle, PageHeader, PageTitle } from '../styles';
import { useSelector } from 'react-redux';
import ThemeButtons from '../components/ThemeButtons';
import UserBlock from '../components/UserBlock';
import TicketsTable from '../components/TicketsTable';
import { Link } from 'react-router-dom';
import ViewButtons from '../components/ViewButtons';

const TicketsPage = ({ context }) => {
    const { user: {name, avatar} } = useSelector( state => state.user);
    
    return (
        <PageContainer>
            <PageHeader>
                <PageTitle>Tickets</PageTitle>
                <ThemeButtons margin="0 0 0 auto"/>
                <UserBlock 
                    margin="0 0 0 33px" 
                    name={name} 
                    avatarUrl={avatar}
                />
            </PageHeader>
            <PageContent>
                <PageContentHeader>
                    <PageContentTitle>All Tickets</PageContentTitle>
                    <Link to="/tickets/new" style={{ textDecoration: "none"}}>
                        <Button margin="0 0 0 25px">New Ticket</Button>
                    </Link>
                    <ViewButtons />
                </PageContentHeader>
                <TicketsTable context={context} />
            </PageContent>
        </PageContainer>
    );
};

export default TicketsPage;