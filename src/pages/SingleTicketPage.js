import { useSelector } from "react-redux";
import EditForm from "../components/EditForm";
import ThemeButtons from "../components/ThemeButtons";
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
                <EditForm />
            </PageContent>
        </PageContainer>
    );
};

export default SingleTicketPage;