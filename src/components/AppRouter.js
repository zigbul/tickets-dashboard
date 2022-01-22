import { Route, Switch, Redirect } from 'react-router-dom';
import { DASHBOARD_ROUTE, LOGIN_ROUTE, TICKETS_ROUTE } from '../utils/constants';
import { v4 as uuidv4 } from 'uuid';
import Sidebar from './Sidebar';
import DashboardPage from '../pages/DashboardPage';
import TicketsPage from '../pages/TicketsPage';
import LoginPage from '../pages/LoginPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/userSlice';

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
                    exact key={uuidv4()} 
                    render={() => <DashboardPage context={context} />} 
                />
                <Route 
                    path={TICKETS_ROUTE} 
                    exact key={uuidv4()} 
                    render={() => <TicketsPage context={context} />} 
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