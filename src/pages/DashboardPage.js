import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTickets } from '../store/slices/ticketSlice';
import totalCounter from '../utils/totalCounter';
import counter from '../utils/counter';

import { PageContainer, PageHeader, PageRow, PageTitle } from '../styles';
import ThemeButtons from '../components/ThemeButtons';
import UserBlock from '../components/UserBlock';
import Card from '../components/Card';
import Chart from '../components/Chart';

const DashboardPage = () => {
    const dispatch = useDispatch();
    const { currentUser: {displayName, photoURL, uid } } = useSelector( state => state.user);
    const { tickets, loading } = useSelector( state => state.ticket);

    useEffect(() => {
        dispatch(getTickets())
    }, [dispatch]);

    if (loading) return (
        <div style={{ display: "flex", height: "60vh", justifyContent: "center", alignItems: "center"}}>
            <h1>Loading...</h1>
        </div>
    );

    // console.log(new Date(Date.now() - 12096e5).toString().split(" ")[2]);

    return (
        <PageContainer>
            <PageHeader>
                <PageTitle>Dashboard</PageTitle>
                <ThemeButtons margin="0 0 0 auto"/>
                <UserBlock 
                    margin="0 0 0 33px" 
                    name={displayName} 
                    avatarUrl={photoURL}
                />
            </PageHeader>
            <PageRow>
                <Card title="Total High" counter={totalCounter(tickets).totalHigh} />
                <Card title="Total Normal" counter={totalCounter(tickets).totalNormal} />
                <Card title="Total Low" counter={totalCounter(tickets).totalLow} />
                <Card title="Total Uncompleted" counter={totalCounter(tickets).total} percent={totalCounter(tickets).percent} />
            </PageRow>
            <Chart data={tickets.filter( ticket => {
                if (ticket.uid === uid && ticket.completed) return true;
                return false; 
            })} />
            <PageRow>
                <Card 
                    title="High" 
                    counter={counter(tickets.filter(ticket => ticket.uid === uid)).high} 
                />
                <Card 
                    title="Normal" 
                    counter={counter(tickets.filter(ticket => ticket.uid === uid)).normal} 
                />
                <Card 
                    title="Low" 
                    counter={counter(tickets.filter(ticket => ticket.uid === uid)).low} 
                />
                <Card title="Uncompleted" 
                    counter={counter(tickets.filter(ticket => ticket.uid === uid)).total} 
                    percent={counter(tickets.filter(ticket => ticket.uid === uid)).percent} 
                /> 
            </PageRow>
        </PageContainer>
    );
};

export default DashboardPage;