import { Route, Switch, Redirect } from 'react-router-dom';
import { DASHBOARD_ROUTE, LOGIN_ROUTE, NEW_TICKET_ROUTE, TICKETS_ROUTE } from '../utils/constants';
import Sidebar from './Sidebar';
import DashboardPage from '../pages/DashboardPage';
import TicketsPage from '../pages/TicketsPage';
import LoginPage from '../pages/LoginPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/userSlice';
import NewTicketPage from '../pages/NewTicketPage';

const AppRouter = ({ context }) => {
    const dispatch = useDispatch();
    const { user } = useSelector( state => state.user);
    
    useEffect(() => {
        dispatch(setUser(JSON.parse(window.localStorage.getItem("currentUser"))));
    }, [dispatch]);

    return user ?
    (   
        <>
            <Sidebar context={context}/>
            <Switch>
                <Route 
                    path={DASHBOARD_ROUTE} 
                    exact 
                    render={() => <DashboardPage />} 
                />
                <Route 
                    path={TICKETS_ROUTE} 
                    exact 
                    render={() => <TicketsPage context={context} />} 
                />
                <Route 
                    path={NEW_TICKET_ROUTE}
                    exact
                    render={() => <NewTicketPage context={context} />}
                />
                <Redirect to={DASHBOARD_ROUTE} />
            </Switch>
        </>
    )
    :
    (
        <Switch>
            <Route 
                path={LOGIN_ROUTE} 
                exact 
                render={() => <LoginPage context={context} />} />
            <Redirect to={LOGIN_ROUTE} />
        </Switch>
    )
};

export default AppRouter;