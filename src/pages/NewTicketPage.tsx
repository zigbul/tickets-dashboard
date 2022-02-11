import React from 'react';
import { useSelector } from "react-redux";

import ThemeButtons from "../components/ThemeButtons";
const NewTicketForm = require("../components/NewTicketForm");
import UserBlock from "../components/UserBlock";
const { PageContainer, PageContent, PageContentHeader, PageContentTitle, PageHeader, PageTitle } = require("../styles");
import Notifications from "../components/Notifications";

type State ={
    user: {
        currentUser: {
            displayName: string,
            photoURL: string,
        }
    }
}

const NewTicketPage = () => {
    const { currentUser: {displayName, photoURL} } = useSelector((state: State) => state.user);

    return (
        <PageContainer>
            <Notifications />
            <PageHeader>
                <PageTitle>New Ticket</PageTitle>
                <ThemeButtons margin="0 0 0 auto" />
                <UserBlock 
                    margin="0 0 0 33px" 
                    name={displayName} 
                    avatarUrl={photoURL}
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