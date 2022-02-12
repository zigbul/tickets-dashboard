import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { DASHBOARD_ROUTE, LOGIN_ROUTE, NEW_TICKET_ROUTE, TICKETS_ROUTE, SINGLE_TICKET_ROUTE } from '../utils/constants';
import LoginPage from '../pages/LoginPage';
import NewTicketPage from '../pages/NewTicketPage';
import SingleTicketPage from '../pages/SingleTicketPage';
const TicketsPage = require('../pages/TicketsPage');
const useAuth = require('../hooks/use-auth');
const Sidebar = require('./Sidebar');
const DashboardPage = require('../pages/DashboardPage');

const AppRouter = () => {
    const { isAuth } = useAuth();

    return isAuth ?
    (
        <>
            <Sidebar />
            <Switch>
                <Route exact path={DASHBOARD_ROUTE} component={DashboardPage} />
                <Route exact path={TICKETS_ROUTE} component={TicketsPage} />
                <Route exact path={NEW_TICKET_ROUTE} component={NewTicketPage} />
                <Route exact path={SINGLE_TICKET_ROUTE} component={SingleTicketPage} />
                <Redirect to={DASHBOARD_ROUTE} />
            </Switch>
        </>
    )
    :
    (
        <Switch>
            <Route exact path={LOGIN_ROUTE} component={LoginPage} />
            <Redirect to={LOGIN_ROUTE} />
        </Switch>
    )
};

export default AppRouter;