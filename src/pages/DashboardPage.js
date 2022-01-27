import { PageContainer, PageHeader, PageRow, PageTitle } from '../styles';
import { useSelector } from 'react-redux';
import useTickets from '../hooks/useTickets';
import totalCounter from '../utils/totalCounter';
import counter from '../utils/counter';

import ThemeButtons from '../components/ThemeButtons';
import UserBlock from '../components/UserBlock';
import Card from '../components/Card';
import Chart from '../components/Chart';

const DashboardPage = () => {
    const { user: {name, avatar} } = useSelector( state => state.user);
    const [ tickets, loading ] = useTickets();

    console.log(counter(tickets));

    if (loading) return (
        <div style={{ display: "flex", height: "60vh", justifyContent: "center", alignItems: "center"}}>
            <h1>Loading...</h1>
        </div>
    );

    return (
        <PageContainer>
            <PageHeader>
                <PageTitle>Dashboard</PageTitle>
                <ThemeButtons margin="0 0 0 auto"/>
                <UserBlock 
                    margin="0 0 0 33px" 
                    name={name} 
                    avatarUrl={avatar}
                />
            </PageHeader>
            <PageRow>
                <Card title="Total High" counter={totalCounter(tickets).totalHigh} />
                <Card title="Total Normal" counter={totalCounter(tickets).totalNormal} />
                <Card title="Total Low" counter={totalCounter(tickets).totalLow} />
                <Card title="Total Uncompleted" counter={totalCounter(tickets).total} percent={totalCounter(tickets).percent} />
            </PageRow>
            <Chart data={tickets} />
            <PageRow>
                <Card title="High" counter={counter(tickets).high} />
                <Card title="Normal" counter={counter(tickets).normal} />
                <Card title="Low" counter={counter(tickets).low} />
                <Card title="Uncompleted" counter={counter(tickets).total} percent={counter(tickets).percent} /> 
            </PageRow>
        </PageContainer>
    );
};

export default DashboardPage;