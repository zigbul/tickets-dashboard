import { PageContainer, PageHeader, PageTitle } from '../styles';
import ThemeButtons from '../components/ThemeButtons';
import UserBlock from '../components/UserBlock';
import avatar from '../assets/avatar.svg';

const TicketsPage = () => {
    return (
        <PageContainer>
            <PageHeader>
                <PageTitle>Tickets</PageTitle>
                <ThemeButtons margin="0 0 0 auto"/>
                <UserBlock 
                    margin="0 0 0 33px" 
                    name="John Ferdinand" 
                    avatarUrl={avatar}
                />
            </PageHeader>
        </PageContainer>
    );
};

export default TicketsPage;