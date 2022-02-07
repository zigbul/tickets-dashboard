import { useSelector } from "react-redux";
import EditForm from "../components/EditForm";
import Notifications from "../components/Notifications";
import ThemeButtons from "../components/ThemeButtons";
import UserBlock from "../components/UserBlock";
import { PageContainer, PageContent, PageContentHeader, PageContentTitle, PageHeader, PageTitle } from "../styles";

const SingleTicketPage = () => {
    const { currentUser: {displayName, photoURL} } = useSelector( state => state.user);

    return (
        <PageContainer>
            <Notifications />
            <PageHeader>
                <PageTitle>Edit Ticket</PageTitle>
                <ThemeButtons margin="0 0 0 auto" />
                <UserBlock 
                    margin="0 0 0 33px" 
                    name={displayName} 
                    avatarUrl={photoURL}
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