import { useSelector } from "react-redux";
import ThemeButtons from "../components/ThemeButtons";
import NewTicketForm from "../components/NewTicketForm";
import UserBlock from "../components/UserBlock";
import { PageContainer, PageContent, PageContentHeader, PageContentTitle, PageHeader, PageTitle } from "../styles";

const NewTicketPage = () => {
    const { user: {name, avatar} } = useSelector( state => state.user);

    return (
        <PageContainer>
            <PageHeader>
                <PageTitle>New Ticket</PageTitle>
                <ThemeButtons margin="0 0 0 auto" />
                <UserBlock 
                    margin="0 0 0 33px" 
                    name={name} 
                    avatarUrl={avatar}
                />
            </PageHeader>
            <PageContent>
                <PageContentHeader>
                    <PageContentTitle>New Ticket</PageContentTitle>
                </PageContentHeader>
                <NewTicketForm />
            </PageContent>
        </PageContainer>
    );
};

export default NewTicketPage;