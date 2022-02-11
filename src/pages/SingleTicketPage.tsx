import React from 'react';
import { useSelector } from "react-redux";
const EditForm = require("../components/EditForm");
import Notifications from "../components/Notifications";
import ThemeButtons from "../components/ThemeButtons";
import UserBlock from "../components/UserBlock";
const { PageContainer, PageContent, PageContentHeader, PageContentTitle, PageHeader, PageTitle } = require("../styles");

type State = {
    user: { 
        currentUser: {
            displayName: string,
            photoURL: string,
        }
    }
}

const SingleTicketPage = () => {
    const { currentUser: {displayName, photoURL} } = useSelector( (state: State) => state.user);

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