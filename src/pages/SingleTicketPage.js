import { useSelector } from "react-redux";
import ThemeButtons from "../components/ThemeButtons";
import TicketForm from "../components/TicketForm";
import UserBlock from "../components/UserBlock";
import { PageContainer, PageContent, PageContentHeader, PageContentTitle, PageHeader, PageTitle } from "../styles";

const SingleTicketPage = () => {
    const { user: {name, avatar} } = useSelector( state => state.user);

    return (
        <PageContainer>
            <PageHeader>
                <PageTitle>Edit Ticket</PageTitle>
                <ThemeButtons margin="0 0 0 auto" />
                <UserBlock 
                    margin="0 0 0 33px" 
                    name={name} 
                    avatarUrl={avatar}
                />
            </PageHeader>
            <PageContent>
                <PageContentHeader>
                    <PageContentTitle>Editing</PageContentTitle>
                </PageContentHeader>
                <TicketForm />
            </PageContent>
        </PageContainer>
    );
};

export default SingleTicketPage;